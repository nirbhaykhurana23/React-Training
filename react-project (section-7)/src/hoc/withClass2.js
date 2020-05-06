import React from 'react';

//another form of HOC
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
            {/* or we can props={props} */}
        </div>
    );
};

export default withClass;