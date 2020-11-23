import React, { useState } from "react";
import './LearnCSSComponent.css'

const LearnCSSComponent = () => {

  return (
    <div>
        <p className="sampleClass">This is learn css component</p>
        <p className="sampleClass" id="learncss-para-1">This is learn css component</p>

        <ul className="listOne">
          <li>elem-1</li>
          <li>elem-2</li>
          <li>elem-3</li>
          <li>elem-4</li>
          <li>elem-5</li>
          <li>elem-6</li>
          <li>elem-7</li>
          <li>elem-8</li>
          <li>elem-9</li>
          <li>elem-10</li>
        </ul>
        <br></br>
        <ul className="listTwo">
          <li>elem-1</li>
          <li>elem-2</li>
          <li>elem-3</li>
          <li>elem-4</li>
          <li>elem-5</li>
          <li>elem-6</li>
          <li>elem-7</li>
          <li>elem-8</li>
          <li>elem-9</li>
          <li>elem-10</li>
        </ul>

        <a id="google-link" href="#">Go to Google</a>


        <div className="descendentSelectorConcept">
          <p>List One:</p>
          <div className="listOne">
            <ul>
              <li>First Item</li>
              <li>Second Item</li>
              <li>Third Item (Another Ordered List)</li>
                <ol>
                  <li>ordered item - 1</li>
                  <li>ordered item - 2</li>
                </ol>

            </ul>
          </div>
          <p>List Two:</p>
          <div className="listTwo">
            <ul>
              <li>First Item</li>
              <li>Second Item</li>
              <li>Third Item (Another Ordered List)
                <ol>
                  <li>ordered item - 1</li>
                  <li>ordered item - 2</li>
                </ol>
                </li>

            </ul>
          </div>
        </div>

        
    </div>
  );
};

export default LearnCSSComponent;
