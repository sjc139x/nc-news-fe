import React from 'react';
import { Router } from '@reach/router';
import Recipes from './Recipes';
import Reviews from './Reviews';
import TopFive from './TopFive';
import ChefLife from './ChefLife';
import Healthy from './Healthy';
import Treats from './Treats';

function Topics () {
    return (
        <div>
            <p>Topics...</p>
            <Router>
                <Recipes path="/recipes"/>
                <Reviews path="/reviews"/>
                <TopFive path="/top5"/>
                <ChefLife path="/chef"/>
                <Healthy path="/healthy"/>
                <Treats path="/treats"/>
            </Router>
        </div>
    )
};

export default Topics;