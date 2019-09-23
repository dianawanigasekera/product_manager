import React from "react";
import { Category } from "../../model/Category";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { addCategory } from "../../store/category/categoryActions"

//interface per la form
interface AddCategoryFormState extends Category { }

interface AddCategoryFormProps {
    category: Category[];
    onAddCategory: (category: Category) => void;
}

const emptyCategory = {
    categoryId: 0,
    name: ""
};

export class AddCategoryFormComponent extends React.Component<
    AddCategoryFormProps,
    AddCategoryFormState

    > {
    constructor(props: AddCategoryFormProps) {
        super(props);
        this.state = {
            ...emptyCategory,
        }
    }
    render() {
        return (
            <div className="col-sm-8" style={{ padding: "40px" }}>
                <form>
                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label>Name:</label>
                        </div>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={this.state.name}
                                onChange={e => {
                                    this.setState({ name: e.target.value });
                                }}
                                placeholder="Enter the product name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <button
                                type="submit"
                                className="btn btn-outline-primary my-2 my-sm-0"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onAddCategory({
                                        ...this.state
                                    })
                                }
                                }
                            >
                                Add Category
                        </button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

function mapStateToProps(state: ApplicationState) {
    return {
        categories: state.categories.category
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onAddCategory: (c: Category) => dispatch(addCategory(c))
    }
}

const AddCategoryForm = connect(mapStateToProps, mapDispatchToProps)(AddCategoryFormComponent);
export default AddCategoryForm;