import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

<table>
  <caption>Rapport</caption>
  <thead>
    <tr>
      <th className='center' scope="col" rowspan="2" colspan="1">Date</th>
      <th className='center' scope="col" colspan="3">Cas confirmés</th>
      <th className='center' scope="col" colspan="3">Hospitalises</th>
      <th className='center' scope="col" colspan="3">Guéris</th>
      <th className='center' scope="col" colspan="3">Réanimations</th>
      <th className='center' scope="col" colspan="3">Décès</th>
    </tr>
    <tr>
      <th className='center' scope="col">Nb</th>
      <th className='left' scope="col">1j</th>
      <th className='left' scope="col">7j</th>
      <th className='center' scope="col">Nb</th>
      <th className='left' scope="col">1j</th>
      <th className='left' scope="col">7j</th>
      <th className='center' scope="col">Nb</th>
      <th className='left' scope="col">1j</th>
      <th className='left' scope="col">7j</th>
      <th className='center' scope="col">Nb</th>
      <th className='left' scope="col">1j</th>
      <th className='left' scope="col">7j</th>
      <th className='center' scope="col">Nb</th>
      <th className='left' scope="col">1j</th>
      <th className='left' scope="col">7j</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-01-24</td>

        <td class="center" data-label="casConfirmes_nb">3</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="hospitalises_nb">3</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-01-27</td>

        <td class="center" data-label="casConfirmes_nb">3</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="hospitalises_nb">3</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-01-28</td>

        <td class="center" data-label="casConfirmes_nb">4</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="hospitalises_nb">4</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-01-29</td>

        <td class="center" data-label="casConfirmes_nb">5</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="hospitalises_nb">5</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="reanimation_nb">2</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-01-30</td>

        <td class="center" data-label="casConfirmes_nb">6</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="hospitalises_nb">6</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="reanimation_nb">2</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-01-31</td>

        <td class="center" data-label="casConfirmes_nb">6</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="hospitalises_nb">6</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="reanimation_nb">2</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-02</td>

        <td class="center" data-label="casConfirmes_nb">6</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="hospitalises_nb">6</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -inf%</span> (-1.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> ()</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">? </span> ()</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-03</td>

        <td class="center" data-label="casConfirmes_nb">6</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">? </span> (+3)</td>
        
        <td class="center" data-label="hospitalises_nb">6</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">? </span> (+3)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">? </span> (+1)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-04</td>

        <td class="center" data-label="casConfirmes_nb">6</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+3)</td>
        
        <td class="center" data-label="hospitalises_nb">6</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+3)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-05</td>

        <td class="center" data-label="casConfirmes_nb">6</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -33.33%</span> (+2)</td>
        
        <td class="center" data-label="hospitalises_nb">6</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -33.33%</span> (+2)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-07</td>

        <td class="center" data-label="casConfirmes_nb">6</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -50.0%</span> (+1)</td>
        
        <td class="center" data-label="hospitalises_nb">6</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -50.0%</span> (+1)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -inf%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-08</td>

        <td class="center" data-label="casConfirmes_nb">11</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +inf%</span> (+5)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +400.0%</span> (+5)</td>
        
        <td class="center" data-label="hospitalises_nb">11</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +inf%</span> (+5)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +400.0%</span> (+5)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-09</td>

        <td class="center" data-label="casConfirmes_nb">11</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+5)</td>
        
        <td class="center" data-label="hospitalises_nb">11</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+5)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-10</td>

        <td class="center" data-label="casConfirmes_nb">11</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+5)</td>
        
        <td class="center" data-label="hospitalises_nb">11</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+5)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-12</td>

        <td class="center" data-label="casConfirmes_nb">11</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+5)</td>
        
        <td class="center" data-label="hospitalises_nb">9</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -inf%</span> (-2.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -40.0%</span> (+3)</td>
        
        <td class="center" data-label="gueris_nb">2</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+2)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+2)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-13</td>

        <td class="center" data-label="casConfirmes_nb">11</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+5)</td>
        
        <td class="center" data-label="hospitalises_nb">8</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -50.0%</span> (-1.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -33.33%</span> (+2)</td>
        
        <td class="center" data-label="gueris_nb">3</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -50.0%</span> (+1)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +50.0%</span> (+3)</td>
        
        <td class="center" data-label="reanimation_nb">1</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">0</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-15</td>

        <td class="center" data-label="casConfirmes_nb">12</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +20.0%</span> (+6)</td>
        
        <td class="center" data-label="hospitalises_nb">7</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -50.0%</span> (+1)</td>
        
        <td class="center" data-label="gueris_nb">4</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +33.33%</span> (+4)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -inf%</span> (-1.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -inf%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">1</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +inf%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-17</td>

        <td class="center" data-label="casConfirmes_nb">12</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+6)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +600.0%</span> (-7.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -700.0%</span> (-6.0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -500.0%</span> (-4.0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">1</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-19</td>

        <td class="center" data-label="casConfirmes_nb">12</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -83.33%</span> (+1)</td>
        
        <td class="center" data-label="hospitalises_nb">4</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -157.14%</span> (+4)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +16.67%</span> (-7.0)</td>
        
        <td class="center" data-label="gueris_nb">7</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -275.0%</span> (+7)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+7)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">1</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-21</td>

        <td class="center" data-label="casConfirmes_nb">12</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        
        <td class="center" data-label="hospitalises_nb">1</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -175.0%</span> (-3.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +42.86%</span> (-10.0)</td>
        
        <td class="center" data-label="gueris_nb">10</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -57.14%</span> (+3)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +42.86%</span> (+10)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">1</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-23</td>

        <td class="center" data-label="casConfirmes_nb">12</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        
        <td class="center" data-label="hospitalises_nb">1</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (-10.0)</td>
        
        <td class="center" data-label="gueris_nb">10</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+10)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">1</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-24</td>

        <td class="center" data-label="casConfirmes_nb">12</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -inf%</span> (-1.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -10.0%</span> (-9.0)</td>
        
        <td class="center" data-label="gueris_nb">11</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -10.0%</span> (+9)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">1</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-25</td>

        <td class="center" data-label="casConfirmes_nb">14</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +inf%</span> (+2)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +200.0%</span> (+3)</td>
        
        <td class="center" data-label="hospitalises_nb">2</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -300.0%</span> (+2)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -33.33%</span> (-6.0)</td>
        
        <td class="center" data-label="gueris_nb">11</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -11.11%</span> (+8)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (-1.0)</td>
        
        <td class="center" data-label="deces_nb">1</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-26</td>

        <td class="center" data-label="casConfirmes_nb">18</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +100.0%</span> (+4)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +100.0%</span> (+6)</td>
        
        <td class="center" data-label="hospitalises_nb">4</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+2)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -50.0%</span> (-3.0)</td>
        
        <td class="center" data-label="gueris_nb">12</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+8)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">2</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-27</td>

        <td class="center" data-label="casConfirmes_nb">38</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +400.0%</span> (+20)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +333.33%</span> (+26)</td>
        
        <td class="center" data-label="hospitalises_nb">24</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +900.0%</span> (+20)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -900.0%</span> (+24)</td>
        
        <td class="center" data-label="gueris_nb">12</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +50.0%</span> (+12)</td>
        
        <td class="center" data-label="reanimation_nb">2</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +inf%</span> (+2)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +inf%</span> (+2)</td>
        
        <td class="center" data-label="deces_nb">2</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-28</td>

        <td class="center" data-label="casConfirmes_nb">57</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -5.0%</span> (+19)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +73.08%</span> (+45)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -220.0%</span> (-24.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -116.67%</span> (-4.0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -inf%</span> (-12.0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -158.33%</span> (-7.0)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -200.0%</span> (-2.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">2</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-02-29</td>

        <td class="center" data-label="casConfirmes_nb">100</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +126.32%</span> (+43)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +95.56%</span> (+88)</td>
        
        <td class="center" data-label="hospitalises_nb">86</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -458.33%</span> (+86)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -2225.0%</span> (+85)</td>
        
        <td class="center" data-label="gueris_nb">12</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -200.0%</span> (+12)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -128.57%</span> (+2)</td>
        
        <td class="center" data-label="reanimation_nb">9</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -550.0%</span> (+9)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +inf%</span> (+9)</td>
        
        <td class="center" data-label="deces_nb">2</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-01</td>

        <td class="center" data-label="casConfirmes_nb">130</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -30.23%</span> (+30)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +34.09%</span> (+118)</td>
        
        <td class="center" data-label="hospitalises_nb">116</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -65.12%</span> (+30)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +35.29%</span> (+115)</td>
        
        <td class="center" data-label="gueris_nb">12</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+2)</td>
        
        <td class="center" data-label="reanimation_nb">9</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+9)</td>
        
        <td class="center" data-label="deces_nb">2</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-02</td>

        <td class="center" data-label="casConfirmes_nb">191</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +103.33%</span> (+61)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +51.69%</span> (+179)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -486.67%</span> (-116.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -inf%</span> (-12.0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -650.0%</span> (-11.0)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -inf%</span> (-9.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">3</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +inf%</span> (+1)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +100.0%</span> (+2)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-03</td>

        <td class="center" data-label="casConfirmes_nb">212</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -65.57%</span> (+21)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +10.61%</span> (+198)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -inf%</span> (-2.0)</td>
        
        <td class="center" data-label="gueris_nb">12</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -200.0%</span> (+12)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -109.09%</span> (+1)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="deces_nb">4</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+1)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +50.0%</span> (+3)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-04</td>

        <td class="center" data-label="casConfirmes_nb">285</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +247.62%</span> (+73)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +34.85%</span> (+267)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +100.0%</span> (-4.0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -200.0%</span> (-12.0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -1300.0%</span> (-12.0)</td>
        
        <td class="center" data-label="reanimation_nb">15</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +inf%</span> (+15)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +inf%</span> (+15)</td>
        
        <td class="center" data-label="deces_nb">4</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -33.33%</span> (+2)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-05</td>

        <td class="center" data-label="casConfirmes_nb">423</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +89.04%</span> (+138)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +44.19%</span> (+385)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +500.0%</span> (-24.0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (-12.0)</td>
        
        <td class="center" data-label="reanimation_nb">23</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -46.67%</span> (+8)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +40.0%</span> (+21)</td>
        
        <td class="center" data-label="deces_nb">7</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +inf%</span> (+3)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +150.0%</span> (+5)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-06</td>

        <td class="center" data-label="casConfirmes_nb">613</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +37.68%</span> (+190)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +44.42%</span> (+556)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">39</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +100.0%</span> (+16)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +85.71%</span> (+39)</td>
        
        <td class="center" data-label="deces_nb">9</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -33.33%</span> (+2)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +40.0%</span> (+7)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-07</td>

        <td class="center" data-label="casConfirmes_nb">949</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +76.84%</span> (+336)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +52.7%</span> (+849)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -inf%</span> (-86.0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -inf%</span> (-12.0)</td>
        
        <td class="center" data-label="reanimation_nb">45</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -62.5%</span> (+6)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -7.69%</span> (+36)</td>
        
        <td class="center" data-label="deces_nb">16</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +250.0%</span> (+7)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +100.0%</span> (+14)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-09</td>

        <td class="center" data-label="casConfirmes_nb">1412</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +37.8%</span> (+463)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +51.0%</span> (+1282)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +34.88%</span> (-116.0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (-12.0)</td>
        
        <td class="center" data-label="reanimation_nb">66</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +250.0%</span> (+21)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +58.33%</span> (+57)</td>
        
        <td class="center" data-label="deces_nb">25</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +28.57%</span> (+9)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +64.29%</span> (+23)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-10</td>

        <td class="center" data-label="casConfirmes_nb">1784</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -19.65%</span> (+372)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +24.26%</span> (+1593)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">86</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -4.76%</span> (+20)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +50.88%</span> (+86)</td>
        
        <td class="center" data-label="deces_nb">33</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -11.11%</span> (+8)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +30.43%</span> (+30)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-11</td>

        <td class="center" data-label="casConfirmes_nb">2281</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +33.6%</span> (+497)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +29.88%</span> (+2069)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -inf%</span> (-12.0)</td>
        
        <td class="center" data-label="reanimation_nb">105</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -5.0%</span> (+19)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +22.09%</span> (+105)</td>
        
        <td class="center" data-label="deces_nb">48</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +87.5%</span> (+15)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +46.67%</span> (+44)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-12</td>

        <td class="center" data-label="casConfirmes_nb">2876</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +19.72%</span> (+595)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +25.23%</span> (+2591)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">129</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +26.32%</span> (+24)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +8.57%</span> (+114)</td>
        
        <td class="center" data-label="deces_nb">61</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -13.33%</span> (+13)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +29.55%</span> (+57)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-14</td>

        <td class="center" data-label="casConfirmes_nb">4500</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +172.94%</span> (+1624)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +57.35%</span> (+4077)</td>
        
        <td class="center" data-label="hospitalises_nb">0</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">300</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +612.5%</span> (+171)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +142.98%</span> (+277)</td>
        
        <td class="center" data-label="deces_nb">91</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +130.77%</span> (+30)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +47.37%</span> (+84)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-15</td>

        <td class="center" data-label="casConfirmes_nb">5423</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -43.17%</span> (+923)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +17.98%</span> (+4810)</td>
        
        <td class="center" data-label="hospitalises_nb">400</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +inf%</span> (+400)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +inf%</span> (+400)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">0</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -275.44%</span> (-300.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -114.08%</span> (-39.0)</td>
        
        <td class="center" data-label="deces_nb">127</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +20.0%</span> (+36)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +40.48%</span> (+118)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-17</td>

        <td class="center" data-label="casConfirmes_nb">7730</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +149.95%</span> (+2307)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +40.98%</span> (+6781)</td>
        
        <td class="center" data-label="hospitalises_nb">2579</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +444.75%</span> (+2179)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +544.75%</span> (+2579)</td>
        
        <td class="center" data-label="gueris_nb">602</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+602)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+602)</td>
        
        <td class="center" data-label="reanimation_nb">699</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -333.0%</span> (+699)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -1776.92%</span> (+654)</td>
        
        <td class="center" data-label="deces_nb">175</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +33.33%</span> (+48)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +34.75%</span> (+159)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-18</td>

        <td class="center" data-label="casConfirmes_nb">9134</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -39.14%</span> (+1404)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +13.88%</span> (+7722)</td>
        
        <td class="center" data-label="hospitalises_nb">3626</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -51.95%</span> (+1047)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +40.6%</span> (+3626)</td>
        
        <td class="center" data-label="gueris_nb">1000</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -33.89%</span> (+398)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +66.11%</span> (+1000)</td>
        
        <td class="center" data-label="reanimation_nb">931</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -66.81%</span> (+232)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +32.26%</span> (+865)</td>
        
        <td class="center" data-label="deces_nb">264</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +85.42%</span> (+89)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +50.31%</span> (+239)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-19</td>

        <td class="center" data-label="casConfirmes_nb">10995</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +32.55%</span> (+1861)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +19.28%</span> (+9211)</td>
        
        <td class="center" data-label="hospitalises_nb">4461</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -20.25%</span> (+835)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +23.03%</span> (+4461)</td>
        
        <td class="center" data-label="gueris_nb">1300</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -24.62%</span> (+300)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +30.0%</span> (+1300)</td>
        
        <td class="center" data-label="reanimation_nb">1122</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -17.67%</span> (+191)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +19.77%</span> (+1036)</td>
        
        <td class="center" data-label="deces_nb">372</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +21.35%</span> (+108)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +41.84%</span> (+339)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-20</td>

        <td class="center" data-label="casConfirmes_nb">12612</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -13.11%</span> (+1617)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +12.16%</span> (+10331)</td>
        
        <td class="center" data-label="hospitalises_nb">5226</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -8.38%</span> (+765)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +17.15%</span> (+5226)</td>
        
        <td class="center" data-label="gueris_nb">1587</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -4.33%</span> (+287)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +22.08%</span> (+1587)</td>
        
        <td class="center" data-label="reanimation_nb">1297</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -8.38%</span> (+175)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +15.06%</span> (+1192)</td>
        
        <td class="center" data-label="deces_nb">450</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -27.78%</span> (+78)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +18.58%</span> (+402)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-21</td>

        <td class="center" data-label="casConfirmes_nb">14459</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +14.22%</span> (+1847)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +12.12%</span> (+11583)</td>
        
        <td class="center" data-label="hospitalises_nb">6172</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +23.66%</span> (+946)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +18.1%</span> (+6172)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -652.96%</span> (-1587.0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">1525</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +30.29%</span> (+228)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +17.11%</span> (+1396)</td>
        
        <td class="center" data-label="deces_nb">562</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +43.59%</span> (+112)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +24.63%</span> (+501)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-22</td>

        <td class="center" data-label="casConfirmes_nb">16689</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +20.74%</span> (+2230)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +5.23%</span> (+12189)</td>
        
        <td class="center" data-label="hospitalises_nb">7240</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +12.9%</span> (+1068)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +17.3%</span> (+7240)</td>
        
        <td class="center" data-label="gueris_nb">2200</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -238.63%</span> (+2200)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+2200)</td>
        
        <td class="center" data-label="reanimation_nb">1746</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -3.07%</span> (+221)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +3.58%</span> (+1446)</td>
        
        <td class="center" data-label="deces_nb">674</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+112)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +16.37%</span> (+583)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-23</td>

        <td class="center" data-label="casConfirmes_nb">19856</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +42.02%</span> (+3167)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +18.41%</span> (+14433)</td>
        
        <td class="center" data-label="hospitalises_nb">8675</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +34.36%</span> (+1435)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +14.3%</span> (+8275)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -200.0%</span> (-2200.0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">2082</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +52.04%</span> (+336)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +43.98%</span> (+2082)</td>
        
        <td class="center" data-label="deces_nb">860</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +66.07%</span> (+186)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +25.73%</span> (+733)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-24</td>

        <td class="center" data-label="casConfirmes_nb">22302</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -22.77%</span> (+2446)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.96%</span> (+14572)</td>
        
        <td class="center" data-label="hospitalises_nb">10176</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +4.6%</span> (+1501)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -8.19%</span> (+7597)</td>
        
        <td class="center" data-label="gueris_nb">3281</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -249.14%</span> (+3281)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+2679)</td>
        
        <td class="center" data-label="reanimation_nb">2516</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +29.17%</span> (+434)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -12.73%</span> (+1817)</td>
        
        <td class="center" data-label="deces_nb">1100</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +29.03%</span> (+240)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +26.19%</span> (+925)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-25</td>

        <td class="center" data-label="casConfirmes_nb">25233</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +19.83%</span> (+2931)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +10.48%</span> (+16099)</td>
        
        <td class="center" data-label="hospitalises_nb">11539</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -9.19%</span> (+1363)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +4.16%</span> (+7913)</td>
        
        <td class="center" data-label="gueris_nb">3900</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -81.13%</span> (+619)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +8.25%</span> (+2900)</td>
        
        <td class="center" data-label="reanimation_nb">2827</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -28.34%</span> (+311)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +4.35%</span> (+1896)</td>
        
        <td class="center" data-label="deces_nb">1331</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.75%</span> (+231)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +15.35%</span> (+1067)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-26</td>

        <td class="center" data-label="casConfirmes_nb">29155</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +33.81%</span> (+3922)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +12.8%</span> (+18160)</td>
        
        <td class="center" data-label="hospitalises_nb">13904</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +73.51%</span> (+2365)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +19.34%</span> (+9443)</td>
        
        <td class="center" data-label="gueris_nb">4948</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +69.31%</span> (+1048)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +25.79%</span> (+3648)</td>
        
        <td class="center" data-label="reanimation_nb">3375</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +76.21%</span> (+548)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +18.83%</span> (+2253)</td>
        
        <td class="center" data-label="deces_nb">1696</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +58.01%</span> (+365)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +24.09%</span> (+1324)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-27</td>

        <td class="center" data-label="casConfirmes_nb">32964</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.88%</span> (+3809)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +12.07%</span> (+20352)</td>
        
        <td class="center" data-label="hospitalises_nb">15732</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -22.71%</span> (+1828)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +11.26%</span> (+10506)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -572.14%</span> (-4948.0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -143.5%</span> (-1587.0)</td>
        
        <td class="center" data-label="reanimation_nb">3787</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -24.82%</span> (+412)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +10.52%</span> (+2490)</td>
        
        <td class="center" data-label="deces_nb">1995</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -18.08%</span> (+299)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +16.69%</span> (+1545)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-28</td>

        <td class="center" data-label="casConfirmes_nb">37575</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +21.06%</span> (+4611)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +13.58%</span> (+23116)</td>
        
        <td class="center" data-label="hospitalises_nb">17620</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +3.28%</span> (+1888)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +8.97%</span> (+11448)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -100.0%</span> (+0)</td>
        
        <td class="center" data-label="reanimation_nb">4273</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +17.96%</span> (+486)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +10.36%</span> (+2748)</td>
        
        <td class="center" data-label="deces_nb">2314</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +6.69%</span> (+319)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +13.4%</span> (+1752)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-29</td>

        <td class="center" data-label="casConfirmes_nb">40174</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -43.63%</span> (+2599)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +1.6%</span> (+23485)</td>
        
        <td class="center" data-label="hospitalises_nb">19354</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -8.16%</span> (+1734)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +5.82%</span> (+12114)</td>
        
        <td class="center" data-label="gueris_nb">0</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.0%</span> (+0)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -inf%</span> (-2200.0)</td>
        
        <td class="center" data-label="reanimation_nb">4632</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -26.13%</span> (+359)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +5.02%</span> (+2886)</td>
        
        <td class="center" data-label="deces_nb">2606</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -8.46%</span> (+292)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +10.27%</span> (+1932)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-30</td>

        <td class="center" data-label="casConfirmes_nb">44550</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +68.37%</span> (+4376)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +5.15%</span> (+24694)</td>
        
        <td class="center" data-label="hospitalises_nb">21008</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -4.61%</span> (+1654)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +1.81%</span> (+12333)</td>
        
        <td class="center" data-label="gueris_nb">7924</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +inf%</span> (+7924)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -460.18%</span> (+7924)</td>
        
        <td class="center" data-label="reanimation_nb">5107</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +32.31%</span> (+475)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +4.82%</span> (+3025)</td>
        
        <td class="center" data-label="deces_nb">3024</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +43.15%</span> (+418)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +12.01%</span> (+2164)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-03-31</td>

        <td class="center" data-label="casConfirmes_nb">52128</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +73.17%</span> (+7578)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +20.78%</span> (+29826)</td>
        
        <td class="center" data-label="hospitalises_nb">22757</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +5.74%</span> (+1749)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +2.01%</span> (+12581)</td>
        
        <td class="center" data-label="gueris_nb">9444</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -80.82%</span> (+1520)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -22.22%</span> (+6163)</td>
        
        <td class="center" data-label="reanimation_nb">5565</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -3.58%</span> (+458)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.79%</span> (+3049)</td>
        
        <td class="center" data-label="deces_nb">3523</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +19.38%</span> (+499)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +11.97%</span> (+2423)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-01</td>

        <td class="center" data-label="casConfirmes_nb">56989</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -35.85%</span> (+4861)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +6.47%</span> (+31756)</td>
        
        <td class="center" data-label="hospitalises_nb">24639</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +7.6%</span> (+1882)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +4.13%</span> (+13100)</td>
        
        <td class="center" data-label="gueris_nb">10935</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.91%</span> (+1491)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +14.15%</span> (+7035)</td>
        
        <td class="center" data-label="reanimation_nb">6017</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -1.31%</span> (+452)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +4.62%</span> (+3190)</td>
        
        <td class="center" data-label="deces_nb">4032</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +2.0%</span> (+509)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +11.47%</span> (+2701)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-02</td>

        <td class="center" data-label="casConfirmes_nb">59105</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -56.47%</span> (+2116)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -5.69%</span> (+29950)</td>
        
        <td class="center" data-label="hospitalises_nb">26246</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -14.61%</span> (+1607)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -5.79%</span> (+12342)</td>
        
        <td class="center" data-label="gueris_nb">12428</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.13%</span> (+1493)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +6.33%</span> (+7480)</td>
        
        <td class="center" data-label="reanimation_nb">6399</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -15.49%</span> (+382)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -5.2%</span> (+3024)</td>
        
        <td class="center" data-label="deces_nb">4503</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -7.47%</span> (+471)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +3.92%</span> (+2807)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-03</td>

        <td class="center" data-label="casConfirmes_nb">64338</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +147.31%</span> (+5233)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +4.75%</span> (+31374)</td>
        
        <td class="center" data-label="hospitalises_nb">27432</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -26.2%</span> (+1186)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -5.2%</span> (+11700)</td>
        
        <td class="center" data-label="gueris_nb">14008</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +5.83%</span> (+1580)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +87.27%</span> (+14008)</td>
        
        <td class="center" data-label="reanimation_nb">6662</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -31.15%</span> (+263)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -4.93%</span> (+2875)</td>
        
        <td class="center" data-label="deces_nb">5091</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +24.84%</span> (+588)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +10.3%</span> (+3096)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-04</td>

        <td class="center" data-label="casConfirmes_nb">68605</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -18.46%</span> (+4267)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -1.1%</span> (+31030)</td>
        
        <td class="center" data-label="hospitalises_nb">28143</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -40.05%</span> (+711)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -10.06%</span> (+10523)</td>
        
        <td class="center" data-label="gueris_nb">15438</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -9.49%</span> (+1430)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +10.21%</span> (+15438)</td>
        
        <td class="center" data-label="reanimation_nb">6838</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -33.08%</span> (+176)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -10.78%</span> (+2565)</td>
        
        <td class="center" data-label="deces_nb">5532</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -25.0%</span> (+441)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +3.94%</span> (+3218)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-05</td>

        <td class="center" data-label="casConfirmes_nb">70478</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -56.1%</span> (+1873)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.34%</span> (+30304)</td>
        
        <td class="center" data-label="hospitalises_nb">28891</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +5.2%</span> (+748)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -9.37%</span> (+9537)</td>
        
        <td class="center" data-label="gueris_nb">16183</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -47.9%</span> (+745)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +4.83%</span> (+16183)</td>
        
        <td class="center" data-label="reanimation_nb">6978</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -20.45%</span> (+140)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -8.54%</span> (+2346)</td>
        
        <td class="center" data-label="deces_nb">5889</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -19.05%</span> (+357)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +2.02%</span> (+3283)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-06</td>

        <td class="center" data-label="casConfirmes_nb">74390</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +108.86%</span> (+3912)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -1.53%</span> (+29840)</td>
        
        <td class="center" data-label="hospitalises_nb">29722</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +11.1%</span> (+831)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -8.63%</span> (+8714)</td>
        
        <td class="center" data-label="gueris_nb">17250</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +43.22%</span> (+1067)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -42.37%</span> (+9326)</td>
        
        <td class="center" data-label="reanimation_nb">7072</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -32.86%</span> (+94)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -16.24%</span> (+1965)</td>
        
        <td class="center" data-label="deces_nb">6494</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +69.47%</span> (+605)</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +5.7%</span> (+3470)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-07</td>

        <td class="center" data-label="casConfirmes_nb">78167</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -3.45%</span> (+3777)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -12.74%</span> (+26039)</td>
        
        <td class="center" data-label="hospitalises_nb">30027</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -63.3%</span> (+305)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -16.57%</span> (+7270)</td>
        
        <td class="center" data-label="gueris_nb">19337</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +95.6%</span> (+2087)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +6.08%</span> (+9893)</td>
        
        <td class="center" data-label="reanimation_nb">7131</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -37.23%</span> (+59)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -20.31%</span> (+1566)</td>
        
        <td class="center" data-label="deces_nb">7091</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -1.32%</span> (+597)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +2.82%</span> (+3568)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-08</td>

        <td class="center" data-label="casConfirmes_nb">82048</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +2.75%</span> (+3881)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -3.76%</span> (+25059)</td>
        
        <td class="center" data-label="hospitalises_nb">30375</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +14.1%</span> (+348)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -21.1%</span> (+5736)</td>
        
        <td class="center" data-label="gueris_nb">21254</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -8.15%</span> (+1917)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +4.31%</span> (+10319)</td>
        
        <td class="center" data-label="reanimation_nb">7148</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -71.19%</span> (+17)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -27.78%</span> (+1131)</td>
        
        <td class="center" data-label="deces_nb">7632</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -9.38%</span> (+541)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.9%</span> (+3600)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-09</td>

        <td class="center" data-label="casConfirmes_nb">86334</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +10.44%</span> (+4286)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +8.66%</span> (+27229)</td>
        
        <td class="center" data-label="hospitalises_nb">30767</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +12.64%</span> (+392)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -21.18%</span> (+4521)</td>
        
        <td class="center" data-label="gueris_nb">23206</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +1.83%</span> (+1952)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +4.45%</span> (+10778)</td>
        
        <td class="center" data-label="reanimation_nb">7066</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -582.35%</span> (-82.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -41.03%</span> (+667)</td>
        
        <td class="center" data-label="deces_nb">8044</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -23.84%</span> (+412)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -1.64%</span> (+3541)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-10</td>

        <td class="center" data-label="casConfirmes_nb">90676</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +1.31%</span> (+4342)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -3.27%</span> (+26338)</td>
        
        <td class="center" data-label="hospitalises_nb">31267</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +27.55%</span> (+500)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -15.17%</span> (+3835)</td>
        
        <td class="center" data-label="gueris_nb">24932</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -11.58%</span> (+1726)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +1.35%</span> (+10924)</td>
        
        <td class="center" data-label="reanimation_nb">7004</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -24.39%</span> (-62.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -48.73%</span> (+342)</td>
        
        <td class="center" data-label="deces_nb">8598</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +34.47%</span> (+554)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -0.96%</span> (+3507)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-11</td>

        <td class="center" data-label="casConfirmes_nb">93790</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -28.28%</span> (+3114)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -4.38%</span> (+25185)</td>
        
        <td class="center" data-label="hospitalises_nb">31320</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -89.4%</span> (+53)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -17.16%</span> (+3177)</td>
        
        <td class="center" data-label="gueris_nb">26391</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -15.47%</span> (+1459)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.27%</span> (+10953)</td>
        
        <td class="center" data-label="reanimation_nb">6883</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +95.16%</span> (-121.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -86.84%</span> (+45)</td>
        
        <td class="center" data-label="deces_nb">8943</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -37.73%</span> (+345)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -2.74%</span> (+3411)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-12</td>

        <td class="center" data-label="casConfirmes_nb">95403</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -48.2%</span> (+1613)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -1.03%</span> (+24925)</td>
        
        <td class="center" data-label="hospitalises_nb">31826</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +854.72%</span> (+506)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -7.62%</span> (+2935)</td>
        
        <td class="center" data-label="gueris_nb">27186</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -45.51%</span> (+795)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.46%</span> (+11003)</td>
        
        <td class="center" data-label="reanimation_nb">6845</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -68.6%</span> (-38.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -395.56%</span> (-133.0)</td>
        
        <td class="center" data-label="deces_nb">9253</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -10.14%</span> (+310)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -1.38%</span> (+3364)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-13</td>

        <td class="center" data-label="casConfirmes_nb">98076</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +65.72%</span> (+2673)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -4.97%</span> (+23686)</td>
        
        <td class="center" data-label="hospitalises_nb">32113</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -43.28%</span> (+287)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -18.53%</span> (+2391)</td>
        
        <td class="center" data-label="gueris_nb">27718</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -33.08%</span> (+532)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -4.86%</span> (+10468)</td>
        
        <td class="center" data-label="reanimation_nb">6821</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -36.84%</span> (-24.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +88.72%</span> (-251.0)</td>
        
        <td class="center" data-label="deces_nb">9588</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +8.06%</span> (+335)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -8.03%</span> (+3094)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-14</td>

        <td class="center" data-label="casConfirmes_nb">103573</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +105.65%</span> (+5497)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +7.26%</span> (+25406)</td>
        
        <td class="center" data-label="hospitalises_nb">32292</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -37.63%</span> (+179)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -5.27%</span> (+2265)</td>
        
        <td class="center" data-label="gueris_nb">28805</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +104.32%</span> (+1087)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -9.55%</span> (+9468)</td>
        
        <td class="center" data-label="reanimation_nb">6730</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +279.17%</span> (-91.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +59.76%</span> (-401.0)</td>
        
        <td class="center" data-label="deces_nb">10129</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +61.49%</span> (+541)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -1.81%</span> (+3038)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-15</td>

        <td class="center" data-label="casConfirmes_nb">106206</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -52.1%</span> (+2633)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -4.91%</span> (+24158)</td>
        
        <td class="center" data-label="hospitalises_nb">31779</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -386.59%</span> (-513.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -38.01%</span> (+1404)</td>
        
        <td class="center" data-label="gueris_nb">30995</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +101.47%</span> (+2190)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +2.88%</span> (+9741)</td>
        
        <td class="center" data-label="reanimation_nb">6457</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +200.0%</span> (-273.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +72.32%</span> (-691.0)</td>
        
        <td class="center" data-label="deces_nb">10643</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -4.99%</span> (+514)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -0.89%</span> (+3011)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-16</td>

        <td class="center" data-label="casConfirmes_nb">108847</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.3%</span> (+2641)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -6.81%</span> (+22513)</td>
        
        <td class="center" data-label="hospitalises_nb">31305</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -7.6%</span> (-474.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -61.68%</span> (+538)</td>
        
        <td class="center" data-label="gueris_nb">32812</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -17.03%</span> (+1817)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.39%</span> (+9606)</td>
        
        <td class="center" data-label="reanimation_nb">6248</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -23.44%</span> (-209.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +18.38%</span> (-818.0)</td>
        
        <td class="center" data-label="deces_nb">11060</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -18.87%</span> (+417)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.17%</span> (+3016)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-17</td>

        <td class="center" data-label="casConfirmes_nb">109252</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -84.66%</span> (+405)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -17.49%</span> (+18576)</td>
        
        <td class="center" data-label="hospitalises_nb">31190</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -75.74%</span> (-115.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -114.31%</span> (-77.0)</td>
        
        <td class="center" data-label="gueris_nb">34420</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -11.5%</span> (+1608)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.23%</span> (+9488)</td>
        
        <td class="center" data-label="reanimation_nb">6027</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +5.74%</span> (-221.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +19.44%</span> (-977.0)</td>
        
        <td class="center" data-label="deces_nb">11478</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.24%</span> (+418)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -4.51%</span> (+2880)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-18</td>

        <td class="center" data-label="casConfirmes_nb">111821</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +534.32%</span> (+2569)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.93%</span> (+18031)</td>
        
        <td class="center" data-label="hospitalises_nb">30639</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +379.13%</span> (-551.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +784.42%</span> (-681.0)</td>
        
        <td class="center" data-label="gueris_nb">35983</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.8%</span> (+1563)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +1.1%</span> (+9592)</td>
        
        <td class="center" data-label="reanimation_nb">5833</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -12.22%</span> (-194.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +7.47%</span> (-1050.0)</td>
        
        <td class="center" data-label="deces_nb">11842</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -12.92%</span> (+364)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.66%</span> (+2899)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-19</td>

        <td class="center" data-label="casConfirmes_nb">112606</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -69.44%</span> (+785)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -4.59%</span> (+17203)</td>
        
        <td class="center" data-label="hospitalises_nb">30610</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -94.74%</span> (-29.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +78.56%</span> (-1216.0)</td>
        
        <td class="center" data-label="gueris_nb">36578</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -61.93%</span> (+595)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.09%</span> (+9392)</td>
        
        <td class="center" data-label="reanimation_nb">5744</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -54.12%</span> (-89.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +4.86%</span> (-1101.0)</td>
        
        <td class="center" data-label="deces_nb">12069</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -37.64%</span> (+227)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -2.86%</span> (+2816)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-20</td>

        <td class="center" data-label="casConfirmes_nb">114657</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +161.27%</span> (+2051)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -3.62%</span> (+16581)</td>
        
        <td class="center" data-label="hospitalises_nb">30584</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -10.34%</span> (-26.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +25.74%</span> (-1529.0)</td>
        
        <td class="center" data-label="gueris_nb">37409</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +39.66%</span> (+831)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +3.18%</span> (+9691)</td>
        
        <td class="center" data-label="reanimation_nb">5683</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -31.46%</span> (-61.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +3.36%</span> (-1138.0)</td>
        
        <td class="center" data-label="deces_nb">12513</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +95.59%</span> (+444)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +3.87%</span> (+2925)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-21</td>

        <td class="center" data-label="casConfirmes_nb">117324</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +30.03%</span> (+2667)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -17.07%</span> (+13751)</td>
        
        <td class="center" data-label="hospitalises_nb">30106</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +1738.46%</span> (-478.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +42.97%</span> (-2186.0)</td>
        
        <td class="center" data-label="gueris_nb">39181</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +113.24%</span> (+1772)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +7.07%</span> (+10376)</td>
        
        <td class="center" data-label="reanimation_nb">5433</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +309.84%</span> (-250.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +13.97%</span> (-1297.0)</td>
        
        <td class="center" data-label="deces_nb">12900</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -12.84%</span> (+387)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -5.26%</span> (+2771)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-22</td>

        <td class="center" data-label="casConfirmes_nb">119151</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -31.5%</span> (+1827)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -5.86%</span> (+12945)</td>
        
        <td class="center" data-label="hospitalises_nb">29741</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -23.64%</span> (-365.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -6.77%</span> (-2038.0)</td>
        
        <td class="center" data-label="gueris_nb">40657</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -16.7%</span> (+1476)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -6.88%</span> (+9662)</td>
        
        <td class="center" data-label="reanimation_nb">5218</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -14.0%</span> (-215.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -4.47%</span> (-1239.0)</td>
        
        <td class="center" data-label="deces_nb">13236</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -13.18%</span> (+336)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -6.42%</span> (+2593)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-23</td>

        <td class="center" data-label="casConfirmes_nb">120804</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -9.52%</span> (+1653)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -7.63%</span> (+11957)</td>
        
        <td class="center" data-label="hospitalises_nb">29219</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +43.01%</span> (-522.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +2.36%</span> (-2086.0)</td>
        
        <td class="center" data-label="gueris_nb">42088</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -3.05%</span> (+1431)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -4.0%</span> (+9276)</td>
        
        <td class="center" data-label="reanimation_nb">5053</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -23.26%</span> (-165.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -3.55%</span> (-1195.0)</td>
        
        <td class="center" data-label="deces_nb">13547</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -7.44%</span> (+311)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -4.09%</span> (+2487)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-24</td>

        <td class="center" data-label="casConfirmes_nb">122577</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +7.26%</span> (+1773)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +11.44%</span> (+13325)</td>
        
        <td class="center" data-label="hospitalises_nb">28658</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +7.47%</span> (-561.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +21.38%</span> (-2532.0)</td>
        
        <td class="center" data-label="gueris_nb">43493</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.82%</span> (+1405)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.19%</span> (+9073)</td>
        
        <td class="center" data-label="reanimation_nb">4870</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +10.91%</span> (-183.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -3.18%</span> (-1157.0)</td>
        
        <td class="center" data-label="deces_nb">13852</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -1.93%</span> (+305)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -4.54%</span> (+2374)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-25</td>

        <td class="center" data-label="casConfirmes_nb">124114</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -13.31%</span> (+1537)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -7.74%</span> (+12293)</td>
        
        <td class="center" data-label="hospitalises_nb">28222</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -22.28%</span> (-436.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -4.54%</span> (-2417.0)</td>
        
        <td class="center" data-label="gueris_nb">44594</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -21.64%</span> (+1101)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -5.09%</span> (+8611)</td>
        
        <td class="center" data-label="reanimation_nb">4725</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -20.77%</span> (-145.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -4.24%</span> (-1108.0)</td>
        
        <td class="center" data-label="deces_nb">14050</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -35.08%</span> (+198)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -6.99%</span> (+2208)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-26</td>

        <td class="center" data-label="casConfirmes_nb">124575</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -70.01%</span> (+461)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.64%</span> (+11969)</td>
        
        <td class="center" data-label="hospitalises_nb">28217</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -98.85%</span> (-5.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -0.99%</span> (-2393.0)</td>
        
        <td class="center" data-label="gueris_nb">44903</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -71.93%</span> (+309)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -3.32%</span> (+8325)</td>
        
        <td class="center" data-label="reanimation_nb">4682</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -70.34%</span> (-43.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -4.15%</span> (-1062.0)</td>
        
        <td class="center" data-label="deces_nb">14202</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -23.23%</span> (+152)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.4%</span> (+2133)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-27</td>

        <td class="center" data-label="casConfirmes_nb">128339</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +716.49%</span> (+3764)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +14.31%</span> (+13682)</td>
        
        <td class="center" data-label="hospitalises_nb">28055</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +3140.0%</span> (-162.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +5.68%</span> (-2529.0)</td>
        
        <td class="center" data-label="gueris_nb">45513</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +97.41%</span> (+610)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.65%</span> (+8104)</td>
        
        <td class="center" data-label="reanimation_nb">4608</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +72.09%</span> (-74.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +1.22%</span> (-1075.0)</td>
        
        <td class="center" data-label="deces_nb">14497</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +94.08%</span> (+295)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -6.99%</span> (+1984)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-28</td>

        <td class="center" data-label="casConfirmes_nb">129859</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -59.62%</span> (+1520)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -8.38%</span> (+12535)</td>
        
        <td class="center" data-label="hospitalises_nb">27484</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +252.47%</span> (-571.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +3.68%</span> (-2622.0)</td>
        
        <td class="center" data-label="gueris_nb">46886</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +125.08%</span> (+1373)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -4.92%</span> (+7705)</td>
        
        <td class="center" data-label="reanimation_nb">4387</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +198.65%</span> (-221.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -2.7%</span> (-1046.0)</td>
        
        <td class="center" data-label="deces_nb">14810</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +6.1%</span> (+313)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.73%</span> (+1910)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-29</td>

        <td class="center" data-label="casConfirmes_nb">128442</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -193.22%</span> (-1417.0)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -25.88%</span> (+9291)</td>
        
        <td class="center" data-label="hospitalises_nb">26834</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +13.84%</span> (-650.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +10.87%</span> (-2907.0)</td>
        
        <td class="center" data-label="gueris_nb">48228</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.26%</span> (+1342)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.74%</span> (+7571)</td>
        
        <td class="center" data-label="reanimation_nb">4207</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -18.55%</span> (-180.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -3.35%</span> (-1011.0)</td>
        
        <td class="center" data-label="deces_nb">15053</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -22.36%</span> (+243)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -4.87%</span> (+1817)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-04-30</td>

        <td class="center" data-label="casConfirmes_nb">129581</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -180.38%</span> (+1139)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -5.53%</span> (+8777)</td>
        
        <td class="center" data-label="hospitalises_nb">26283</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -15.23%</span> (-551.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +1.0%</span> (-2936.0)</td>
        
        <td class="center" data-label="gueris_nb">49476</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -7.0%</span> (+1248)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.42%</span> (+7388)</td>
        
        <td class="center" data-label="reanimation_nb">4019</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +4.44%</span> (-188.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +2.27%</span> (-1034.0)</td>
        
        <td class="center" data-label="deces_nb">15244</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -21.4%</span> (+191)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -6.6%</span> (+1697)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-01</td>

        <td class="center" data-label="casConfirmes_nb">130185</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -46.97%</span> (+604)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -13.32%</span> (+7608)</td>
        
        <td class="center" data-label="hospitalises_nb">25887</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -28.13%</span> (-396.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -5.62%</span> (-2771.0)</td>
        
        <td class="center" data-label="gueris_nb">50212</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -41.03%</span> (+736)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -9.06%</span> (+6719)</td>
        
        <td class="center" data-label="reanimation_nb">3878</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -25.0%</span> (-141.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -4.06%</span> (-992.0)</td>
        
        <td class="center" data-label="deces_nb">15369</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -34.55%</span> (+125)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -10.61%</span> (+1517)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-02</td>

        <td class="center" data-label="casConfirmes_nb">130979</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +31.46%</span> (+794)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -9.77%</span> (+6865)</td>
        
        <td class="center" data-label="hospitalises_nb">25827</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -84.85%</span> (-60.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -13.57%</span> (-2395.0)</td>
        
        <td class="center" data-label="gueris_nb">50562</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -52.45%</span> (+350)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -11.18%</span> (+5968)</td>
        
        <td class="center" data-label="reanimation_nb">3827</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -63.83%</span> (-51.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -9.48%</span> (-898.0)</td>
        
        <td class="center" data-label="deces_nb">15487</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -5.6%</span> (+118)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -5.27%</span> (+1437)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-03</td>

        <td class="center" data-label="casConfirmes_nb">131287</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -61.21%</span> (+308)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.23%</span> (+6712)</td>
        
        <td class="center" data-label="hospitalises_nb">25815</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -80.0%</span> (-12.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.29%</span> (-2402.0)</td>
        
        <td class="center" data-label="gueris_nb">50784</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -36.57%</span> (+222)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.46%</span> (+5881)</td>
        
        <td class="center" data-label="reanimation_nb">3819</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -84.31%</span> (-8.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -3.9%</span> (-863.0)</td>
        
        <td class="center" data-label="deces_nb">15583</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -18.64%</span> (+96)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.9%</span> (+1381)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-04</td>

        <td class="center" data-label="casConfirmes_nb">131863</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +87.01%</span> (+576)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -47.5%</span> (+3524)</td>
        
        <td class="center" data-label="hospitalises_nb">25548</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +2125.0%</span> (-267.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +4.37%</span> (-2507.0)</td>
        
        <td class="center" data-label="gueris_nb">51371</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +164.41%</span> (+587)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -0.39%</span> (+5858)</td>
        
        <td class="center" data-label="reanimation_nb">3696</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +1437.5%</span> (-123.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +5.68%</span> (-912.0)</td>
        
        <td class="center" data-label="deces_nb">15826</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +153.12%</span> (+243)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.77%</span> (+1329)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-05</td>

        <td class="center" data-label="casConfirmes_nb">132967</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +91.67%</span> (+1104)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -11.8%</span> (+3108)</td>
        
        <td class="center" data-label="hospitalises_nb">24775</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +189.51%</span> (-773.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +8.06%</span> (-2709.0)</td>
        
        <td class="center" data-label="gueris_nb">52736</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +132.54%</span> (+1365)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -0.14%</span> (+5850)</td>
        
        <td class="center" data-label="reanimation_nb">3430</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +116.26%</span> (-266.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +4.93%</span> (-957.0)</td>
        
        <td class="center" data-label="deces_nb">16060</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.7%</span> (+234)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -5.94%</span> (+1250)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-06</td>

        <td class="center" data-label="casConfirmes_nb">137150</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +278.89%</span> (+4183)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +180.18%</span> (+8708)</td>
        
        <td class="center" data-label="hospitalises_nb">23983</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +2.46%</span> (-792.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +5.24%</span> (-2851.0)</td>
        
        <td class="center" data-label="gueris_nb">53972</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -9.45%</span> (+1236)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.81%</span> (+5744)</td>
        
        <td class="center" data-label="reanimation_nb">3147</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +6.39%</span> (-283.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +10.76%</span> (-1060.0)</td>
        
        <td class="center" data-label="deces_nb">16237</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -24.36%</span> (+177)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -5.28%</span> (+1184)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-07</td>

        <td class="center" data-label="casConfirmes_nb">137779</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -84.96%</span> (+629)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -5.86%</span> (+8198)</td>
        
        <td class="center" data-label="hospitalises_nb">23208</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -2.15%</span> (-775.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +7.86%</span> (-3075.0)</td>
        
        <td class="center" data-label="gueris_nb">55027</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -14.64%</span> (+1055)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -3.36%</span> (+5551)</td>
        
        <td class="center" data-label="reanimation_nb">2961</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -34.28%</span> (-186.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -0.19%</span> (-1058.0)</td>
        
        <td class="center" data-label="deces_nb">16386</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -15.82%</span> (+149)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.55%</span> (+1142)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-08</td>

        <td class="center" data-label="casConfirmes_nb">138421</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +2.07%</span> (+642)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +0.46%</span> (+8236)</td>
        
        <td class="center" data-label="hospitalises_nb">22724</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -37.55%</span> (-484.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +2.86%</span> (-3163.0)</td>
        
        <td class="center" data-label="gueris_nb">55782</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -28.44%</span> (+755)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.34%</span> (+5570)</td>
        
        <td class="center" data-label="reanimation_nb">2868</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -50.0%</span> (-93.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -4.54%</span> (-1010.0)</td>
        
        <td class="center" data-label="deces_nb">16497</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -25.5%</span> (+111)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -1.23%</span> (+1128)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-09</td>

        <td class="center" data-label="casConfirmes_nb">138854</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -32.55%</span> (+433)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -4.38%</span> (+7875)</td>
        
        <td class="center" data-label="hospitalises_nb">22614</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -77.27%</span> (-110.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +1.58%</span> (-3213.0)</td>
        
        <td class="center" data-label="gueris_nb">56038</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -66.09%</span> (+256)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.69%</span> (+5476)</td>
        
        <td class="center" data-label="reanimation_nb">2812</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -39.78%</span> (-56.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.5%</span> (-1015.0)</td>
        
        <td class="center" data-label="deces_nb">16573</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -31.53%</span> (+76)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.72%</span> (+1086)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-10</td>

        <td class="center" data-label="casConfirmes_nb">139063</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -51.73%</span> (+209)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -1.26%</span> (+7776)</td>
        
        <td class="center" data-label="hospitalises_nb">22569</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -59.09%</span> (-45.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +1.03%</span> (-3246.0)</td>
        
        <td class="center" data-label="gueris_nb">56217</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -30.08%</span> (+179)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -0.79%</span> (+5433)</td>
        
        <td class="center" data-label="reanimation_nb">2776</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -35.71%</span> (-36.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +2.76%</span> (-1043.0)</td>
        
        <td class="center" data-label="deces_nb">16642</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -9.21%</span> (+69)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -2.49%</span> (+1059)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-11</td>

        <td class="center" data-label="casConfirmes_nb">139519</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +118.18%</span> (+456)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -1.54%</span> (+7656)</td>
        
        <td class="center" data-label="hospitalises_nb">22284</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +533.33%</span> (-285.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.55%</span> (-3264.0)</td>
        
        <td class="center" data-label="gueris_nb">56724</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +183.24%</span> (+507)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -1.47%</span> (+5353)</td>
        
        <td class="center" data-label="reanimation_nb">2712</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +77.78%</span> (-64.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -5.66%</span> (-984.0)</td>
        
        <td class="center" data-label="deces_nb">16820</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +157.97%</span> (+178)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -6.14%</span> (+994)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-12</td>

        <td class="center" data-label="casConfirmes_nb">140227</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +55.26%</span> (+708)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -5.17%</span> (+7260)</td>
        
        <td class="center" data-label="hospitalises_nb">21595</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +141.75%</span> (-689.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -2.57%</span> (-3180.0)</td>
        
        <td class="center" data-label="gueris_nb">57785</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +109.27%</span> (+1061)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -5.68%</span> (+5049)</td>
        
        <td class="center" data-label="reanimation_nb">2542</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +165.62%</span> (-170.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -9.76%</span> (-888.0)</td>
        
        <td class="center" data-label="deces_nb">17003</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +2.81%</span> (+183)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -5.13%</span> (+943)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-13</td>

        <td class="center" data-label="casConfirmes_nb">140734</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -28.39%</span> (+507)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -50.63%</span> (+3584)</td>
        
        <td class="center" data-label="hospitalises_nb">21071</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -23.95%</span> (-524.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -8.43%</span> (-2912.0)</td>
        
        <td class="center" data-label="gueris_nb">58673</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -16.31%</span> (+888)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -6.89%</span> (+4701)</td>
        
        <td class="center" data-label="reanimation_nb">2428</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -32.94%</span> (-114.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -19.03%</span> (-719.0)</td>
        
        <td class="center" data-label="deces_nb">17101</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -46.45%</span> (+98)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -8.38%</span> (+864)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-14</td>

        <td class="center" data-label="casConfirmes_nb">141356</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +22.68%</span> (+622)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -0.2%</span> (+3577)</td>
        
        <td class="center" data-label="hospitalises_nb">20463</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +16.03%</span> (-608.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -5.73%</span> (-2745.0)</td>
        
        <td class="center" data-label="gueris_nb">59605</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +4.95%</span> (+932)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.62%</span> (+4578)</td>
        
        <td class="center" data-label="reanimation_nb">2299</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +13.16%</span> (-129.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -7.93%</span> (-662.0)</td>
        
        <td class="center" data-label="deces_nb">17224</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +25.51%</span> (+123)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.01%</span> (+838)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-15</td>

        <td class="center" data-label="casConfirmes_nb">141919</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -9.49%</span> (+563)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.21%</span> (+3498)</td>
        
        <td class="center" data-label="hospitalises_nb">19861</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -0.99%</span> (-602.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +4.3%</span> (-2863.0)</td>
        
        <td class="center" data-label="gueris_nb">60448</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -9.55%</span> (+843)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +1.92%</span> (+4666)</td>
        
        <td class="center" data-label="reanimation_nb">2203</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -25.58%</span> (-96.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +0.45%</span> (-665.0)</td>
        
        <td class="center" data-label="deces_nb">17342</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -4.07%</span> (+118)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.84%</span> (+845)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-16</td>

        <td class="center" data-label="casConfirmes_nb">142291</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -33.93%</span> (+372)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -1.74%</span> (+3437)</td>
        
        <td class="center" data-label="hospitalises_nb">19432</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -28.74%</span> (-429.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +11.14%</span> (-3182.0)</td>
        
        <td class="center" data-label="gueris_nb">61066</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -26.69%</span> (+618)</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +7.76%</span> (+5028)</td>
        
        <td class="center" data-label="reanimation_nb">2132</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -26.04%</span> (-71.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +2.26%</span> (-680.0)</td>
        
        <td class="center" data-label="deces_nb">17412</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -40.68%</span> (+70)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -0.71%</span> (+839)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-17</td>

        <td class="center" data-label="casConfirmes_nb">142411</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -67.74%</span> (+120)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.59%</span> (+3348)</td>
        
        <td class="center" data-label="hospitalises_nb">19361</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -83.45%</span> (-71.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.82%</span> (-3208.0)</td>
        
        <td class="center" data-label="gueris_nb">61213</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -76.21%</span> (+147)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -0.64%</span> (+4996)</td>
        
        <td class="center" data-label="reanimation_nb">2087</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -36.62%</span> (-45.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +1.32%</span> (-689.0)</td>
        
        <td class="center" data-label="deces_nb">17466</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -22.86%</span> (+54)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -1.79%</span> (+824)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-18</td>

        <td class="center" data-label="casConfirmes_nb">142903</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +310.0%</span> (+492)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ +1.08%</span> (+3384)</td>
        
        <td class="center" data-label="hospitalises_nb">19015</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +387.32%</span> (-346.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +1.9%</span> (-3269.0)</td>
        
        <td class="center" data-label="gueris_nb">61728</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +250.34%</span> (+515)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +0.16%</span> (+5004)</td>
        
        <td class="center" data-label="reanimation_nb">1998</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +97.78%</span> (-89.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ +3.63%</span> (-714.0)</td>
        
        <td class="center" data-label="deces_nb">17589</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +127.78%</span> (+123)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -6.67%</span> (+769)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-19</td>

        <td class="center" data-label="casConfirmes_nb">143427</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +6.5%</span> (+524)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -5.44%</span> (+3200)</td>
        
        <td class="center" data-label="hospitalises_nb">18468</td>
        <td class="left" data-label="hospitalises_1j"><span class="good">⬈ +58.09%</span> (-547.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -4.34%</span> (-3127.0)</td>
        
        <td class="center" data-label="gueris_nb">62563</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +62.14%</span> (+835)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -4.52%</span> (+4778)</td>
        
        <td class="center" data-label="reanimation_nb">1894</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +16.85%</span> (-104.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -9.24%</span> (-648.0)</td>
        
        <td class="center" data-label="deces_nb">17714</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +1.63%</span> (+125)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -7.54%</span> (+711)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-20</td>

        <td class="center" data-label="casConfirmes_nb">143845</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -20.23%</span> (+418)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -2.78%</span> (+3111)</td>
        
        <td class="center" data-label="hospitalises_nb">17941</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -3.66%</span> (-527.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +0.1%</span> (-3130.0)</td>
        
        <td class="center" data-label="gueris_nb">63354</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -5.27%</span> (+791)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.03%</span> (+4681)</td>
        
        <td class="center" data-label="reanimation_nb">1794</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -3.85%</span> (-100.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="unknow">⬌ -2.16%</span> (-634.0)</td>
        
        <td class="center" data-label="deces_nb">17812</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -21.6%</span> (+98)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ +0.0%</span> (+711)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-21</td>

        <td class="center" data-label="casConfirmes_nb">144163</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -23.92%</span> (+318)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -9.77%</span> (+2807)</td>
        
        <td class="center" data-label="hospitalises_nb">17583</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -32.07%</span> (-358.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -7.99%</span> (-2880.0)</td>
        
        <td class="center" data-label="gueris_nb">63858</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -36.28%</span> (+504)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -9.14%</span> (+4253)</td>
        
        <td class="center" data-label="reanimation_nb">1745</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -51.0%</span> (-49.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -12.62%</span> (-554.0)</td>
        
        <td class="center" data-label="deces_nb">17870</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -40.82%</span> (+58)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -9.14%</span> (+646)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-22</td>

        <td class="center" data-label="casConfirmes_nb">144556</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +23.58%</span> (+393)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -6.06%</span> (+2637)</td>
        
        <td class="center" data-label="hospitalises_nb">17383</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -44.13%</span> (-200.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -13.96%</span> (-2478.0)</td>
        
        <td class="center" data-label="gueris_nb">64209</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -30.36%</span> (+351)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -11.57%</span> (+3761)</td>
        
        <td class="center" data-label="reanimation_nb">1701</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -10.2%</span> (-44.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -9.39%</span> (-502.0)</td>
        
        <td class="center" data-label="deces_nb">17944</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +27.59%</span> (+74)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -6.81%</span> (+602)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-23</td>

        <td class="center" data-label="casConfirmes_nb">144806</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -36.39%</span> (+250)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -4.63%</span> (+2515)</td>
        
        <td class="center" data-label="hospitalises_nb">17178</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +2.5%</span> (-205.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -9.04%</span> (-2254.0)</td>
        
        <td class="center" data-label="gueris_nb">64547</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -3.7%</span> (+338)</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -7.44%</span> (+3481)</td>
        
        <td class="center" data-label="reanimation_nb">1665</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -18.18%</span> (-36.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -6.97%</span> (-467.0)</td>
        
        <td class="center" data-label="deces_nb">17987</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -41.89%</span> (+43)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -4.49%</span> (+575)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-24</td>

        <td class="center" data-label="casConfirmes_nb">144921</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -54.0%</span> (+115)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="unknow">⬌ -0.2%</span> (+2510)</td>
        
        <td class="center" data-label="hospitalises_nb">17185</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -103.41%</span> (+7)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ -3.46%</span> (-2176.0)</td>
        
        <td class="center" data-label="gueris_nb">64617</td>
        <td class="left" data-label="gueris_1j"><span class="bad">⬊ -79.29%</span> (+70)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ -2.21%</span> (+3404)</td>
        
        <td class="center" data-label="reanimation_nb">1655</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -72.22%</span> (-10.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -7.49%</span> (-432.0)</td>
        
        <td class="center" data-label="deces_nb">18022</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -18.6%</span> (+35)</td>
        <td class="left" data-label="deces_1j"><span class="unknow">⬌ -3.3%</span> (+556)</td>
    </tr>
        
    <tr>
      <td class="center" scope="row" data-label="cas_confirmes">2020-05-25</td>

        <td class="center" data-label="casConfirmes_nb">145279</td>
        <td class="left" data-label="casConfirmes_1j"><span class="good">⬈ +211.3%</span> (+358)</td>
        <td class="left" data-label="casConfirmes_1j"><span class="bad">⬊ -5.34%</span> (+2376)</td>
        
        <td class="center" data-label="hospitalises_nb">16798</td>
        <td class="left" data-label="hospitalises_1j"><span class="bad">⬊ -5628.57%</span> (-387.0)</td>
        <td class="left" data-label="hospitalises_1j"><span class="unknow">⬌ +1.88%</span> (-2217.0)</td>
        
        <td class="center" data-label="gueris_nb">65199</td>
        <td class="left" data-label="gueris_1j"><span class="good">⬈ +731.43%</span> (+582)</td>
        <td class="left" data-label="gueris_1j"><span class="unknow">⬌ +1.97%</span> (+3471)</td>
        
        <td class="center" data-label="reanimation_nb">1609</td>
        <td class="left" data-label="reanimation_1j"><span class="good">⬈ +360.0%</span> (-46.0)</td>
        <td class="left" data-label="reanimation_1j"><span class="bad">⬊ -9.95%</span> (-389.0)</td>
        
        <td class="center" data-label="deces_nb">18112</td>
        <td class="left" data-label="deces_1j"><span class="good">⬈ +157.14%</span> (+90)</td>
        <td class="left" data-label="deces_1j"><span class="bad">⬊ -5.94%</span> (+523)</td>
            </tr>
</tbody>
</table>


  );
}

export default App;
