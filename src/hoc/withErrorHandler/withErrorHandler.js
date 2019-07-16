import React from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Fragment/Fragment';
import useHttpErrorHandler from '../../Hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Aux>
                <Modal show={error} modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHandler;
