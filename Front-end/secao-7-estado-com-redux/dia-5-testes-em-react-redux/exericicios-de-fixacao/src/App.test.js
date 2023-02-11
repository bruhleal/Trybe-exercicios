import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import counterReducer from './redux/reducers/counterReducer';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});


describe('Testa o clique dos botões', () => {
  test(('Com o valor padrão do reducer, os botões devem incrementar os valores corretamente'), () => {
    renderWithRedux(<App/>);

    const allBtt = screen.queryAllByrole('button');
    expect(allBtt.length).toBe(2);

    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(allBtt[0]);
    expect(screen.getbyText('1')).toBeInTheDocument();

    userEvent.click(allBtt[1]);
    expect(screen.getbyText('6')).toBeInTheDocument();
  });

  test('Iniciando o estado global com um valor personalizado, os botões devem incrementar os valores corretamente', () => {
    const initialState = {
      counterReducer: {
        count: 5,
      }
    }

    renderWithRedux(<App/>, { initialState });

    const allBtt = screen.queryAllByrole('button');
    expect(allBtt.length).toBe(2);

    expect(screen.getByText('5')).toBeInTheDocument();

    userEvent.click(allBtt[0]);
    expect(screen.getbyText('6')).toBeInTheDocument();

    userEvent.click(allBtt[1]);
    expect(screen.getbyText('11')).toBeInTheDocument();
  })
})