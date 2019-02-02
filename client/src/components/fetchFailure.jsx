import React from 'react';
import './todo.css';

const FetchFailure = ({stylingProperty}) => (
<div className={stylingProperty}>
Failed to fetch the details!
</div>
)

export default FetchFailure;
