import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';

export default function cellWithEditing(edit, remove) {
    return class extends GridCell {
        render() {
            return (
                <td>
                    <button
                        className="k-primary k-button k-grid-edit-command"
                        onClick={() => { edit(this.props.dataItem); }}
                    >
                        Edit
                    </button>
                    &nbsp;
                    <button
                        className="k-button k-grid-remove-command"
                        onClick={() => {
                                remove(this.props.dataItem);
                        }}
                    >
                        Remove
                    </button>
                </td>
            );
        }
    };
}