import { Grid, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import BaseButton from '../Button';
import { BaseSelectField } from '../Select';
import { BaseTextField } from '../TextField';

const useStyles = makeStyles((theme) => ({
    label: {
        fontWeight: 'bold',
        paddingRight: '12px',
        paddingTop: '4px',
        textAlign: 'right'
    },
    appliedFilter: {
        padding: '5px 10px',
        backgroundColor: '#EEE',
        marginRight: '5px',
        borderRadius: '5px'
    },
    removeFilter: {
        padding: '0px 5px',
        fontWeight: '500',
        cursor: 'pointer'
    }
}));
const filterMap = {
    name: 'Name',
    expireDate:'Expire Date',
    price: 'Price'
}

const DynamicSearchbar = ({ ...props }) => {
    const classes = useStyles();

    const [filters, setFilters] = useState({ filterBy: 'Select', filterValue: '' });
    const addFilter = () => {
        if (filters.filterBy === 'Select' || !filters.filterValue) {
            return;
        }
        props.updateFilters(filters, false);
        setFilters({ filterBy: 'Select', filterValue: '' });
    }
    return (
        <>
            <Grid container direction={'row'}>
                <Grid style={{ paddingRight: '10px' }}>
                    <span className={classes.label}>Filter By: </span>
                    <BaseSelectField
                        id="filterBy"
                        value={filters.filterBy}
                        onChange={(event) => {
                            setFilters({ ...filters, filterBy: event.target.value });
                        }}
                    >
                        <MenuItem key={'Select'} value={'Select'}>Select</MenuItem>
                        {props.options.map(option =>
                            <MenuItem key={option.id} value={option.id}>{option.text}</MenuItem>
                        )}
                    </BaseSelectField>
                </Grid>
                <Grid style={{ paddingRight: '10px' }}>
                    <BaseTextField
                        id='filterValue'
                        fullWidth={false}
                        value={filters.filterValue}
                        onChange={(event) => {
                            setFilters({ ...filters, filterValue: event.target.value });
                        }}
                    />
                </Grid>
                <Grid style={{ paddingRight: '10px' }}>
                    <BaseButton color="primary" onClick={addFilter}>Apply Filter</BaseButton>
                </Grid>
            </Grid>
            {props.appliedFilters 
            // && props.appliedFilters.length > 0 
            && <Grid container>
                <RenderAppliedFilters appliedFilters={props.appliedFilters} updateFilters={props.updateFilters}></RenderAppliedFilters>
            </Grid>
            }

        </>
    )
}
const RenderAppliedFilters = ({ ...props }) => {
    const classes = useStyles();
    const filters = Object.entries(props.appliedFilters);
    return (
        <>
            { filters.length > 0 && <Grid container direction={'row'} style={{ margin: '10px 0px' }}>
                {
                filters.map(([k, value]) => 
                    value && <span key={k} className={classes.appliedFilter}>
                        {(filterMap[k] ? filterMap[k] : k)} <b> {k!=='price' ? ' contains ' : ' between '} </b> {(value.join ? value.join(" - ") : value.toString())}
                        <span
                            onClick={() => {
                                props.updateFilters({filterBy:k, filterValue:value}, true)
                            }}
                            className={classes.removeFilter}>
                            X
                        </span>
                    </span>
                
                )}
            </Grid>
        }
        </>
    )
};
export { DynamicSearchbar, RenderAppliedFilters };