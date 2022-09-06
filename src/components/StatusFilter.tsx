import { useCallback } from 'react'

export enum STATUS_FILTER {
    ALL = 'all',
    COMPLETED = 'completed',
    PENDING = 'pending',
}

enum STATUS_FILTER_ACTION {
    COMPLETED_ON = 'completed_on',
    COMPLETED_OFF = 'completed_off',
    PENDING_ON = 'pending_on',
    PENDING_OFF = 'pending_off',
}

function getNextFilterStatus(state: STATUS_FILTER, action: STATUS_FILTER_ACTION): STATUS_FILTER {
    switch(state) {
    
        case STATUS_FILTER.ALL:
            if(action === STATUS_FILTER_ACTION.COMPLETED_OFF) {
                return STATUS_FILTER.PENDING
            }
            else if(action === STATUS_FILTER_ACTION.PENDING_OFF) {
                return STATUS_FILTER.COMPLETED
            }
            else {
                return state
            }

        case STATUS_FILTER.COMPLETED:
            if(action === STATUS_FILTER_ACTION.COMPLETED_OFF) {
                return STATUS_FILTER.PENDING
            }
            else if(action === STATUS_FILTER_ACTION.PENDING_ON) {
                return STATUS_FILTER.ALL
            }
            else {
                return state
            }

        case STATUS_FILTER.PENDING:
            if(action === STATUS_FILTER_ACTION.COMPLETED_ON) {
                return STATUS_FILTER.ALL
            }
            else if(action === STATUS_FILTER_ACTION.PENDING_OFF) {
                return STATUS_FILTER.COMPLETED
            }
            else {
                return state
            }

        default:
            return state
    }
}

export const StatusFilter = ({value, onChange}: {value: STATUS_FILTER, onChange: (value: STATUS_FILTER) => void}) => {
    const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const statusFilterCheckbox: STATUS_FILTER = e.currentTarget.dataset.statusFilterCheckbox as STATUS_FILTER
        const action = statusFilterCheckbox + (e.target.checked ? '_on' : '_off') as STATUS_FILTER_ACTION
        const nextStatusFilter = getNextFilterStatus(value, action)

        onChange(nextStatusFilter)
    }, [value, onChange])

    return (
        <>
            <div>
                <input
                    id="checkbox-completed"
                    type="checkbox"
                    data-status-filter-checkbox={STATUS_FILTER.COMPLETED}
                    checked={value === STATUS_FILTER.ALL || value === STATUS_FILTER.COMPLETED}
                    onChange={handleFilterChange}
                />
                <label htmlFor="checkbox-completed">Completed</label>
            </div>
            <div>
                <input
                    id="checkbox-pending"
                    type="checkbox"
                    data-status-filter-checkbox={STATUS_FILTER.PENDING}
                    checked={value === STATUS_FILTER.ALL || value === STATUS_FILTER.PENDING}
                    onChange={handleFilterChange}
                />
                <label htmlFor="checkbox-pending">Pending</label>
            </div>
        </>
    )
}
