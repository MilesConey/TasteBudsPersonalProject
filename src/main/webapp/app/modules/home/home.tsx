import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="9">
        {account?.login ? (
            <h2>
            <Translate contentKey="home.logged.welcomeMessage" interpolate={{ username: account.login }}>
              You are logged in as user {account.login}.
            </Translate>
            </h2>
          
        ) : (
          <div className="card text-white bg-warning mb-3">
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">Click</Translate>&nbsp;
              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link">here</Translate>&nbsp;
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">to sign in.</Translate>
            </Alert>

            <Alert color="warning">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </div>
        )}
      </Col>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
    </Row>
  );
};

export default Home;
