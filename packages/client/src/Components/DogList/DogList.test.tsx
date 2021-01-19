import axios from 'axios';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import DogList from './DogList';

jest.mock('axios');
const {act} = TestRenderer;

test('DogList can render some dogs', () => {
    const dogs = [
        { name: 'Butler', breed: 'Corgi', score: '10/10' }
    ];

    const component = TestRenderer.create(<DogList dogs={dogs}/>);

    let tree = component!.toJSON();
    expect(tree).toMatchSnapshot();
});