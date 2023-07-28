import { useState } from 'react'
import Button from './Button'
import './App.css'

function App() {
  return (
    <>
      <h1 style={{color:'gray', fontWeight:'bold', textAlign:'left'}}>Buttons</h1>
      <div className="grid-2-columns">
        <div className='html-style'>
          &lt;Button /&gt; <br />
          <Button/>
        </div>
        <div className='css-effects-style'>
          &:hover, &focus<br />
          <Button/>
        </div>
      </div>
      <div className="grid-2-columns">
        <div className='html-style'>
          &lt;Button variant="outline" /&gt; <br />
          <Button variant='outline'/>
        </div>
        <div className='css-effects-style'>
          &:hover, &focus<br />
          <Button variant='outline'/>
        </div>
      </div>
      <div className="grid-2-columns">
        <div className='html-style'>
          &lt;Button variant="text" /&gt; <br />
          <Button variant='text'/>
        </div>
        <div className='css-effects-style'>
          &:hover, &focus<br />
          <Button variant='text'/>
        </div>
      </div>
      <div className="grid-2-columns">
        <div className='html-style'>
          &lt;Button disabled /&gt; <br />
          <Button disabled />
        </div>
        <div className='html-style'>
          &lt;Button variant="text" disabled /&gt; <br />
          <Button variant="text" disabled />
        </div>
      </div>
      <div className="grid-2-columns">
        <div className='html-style'>
          &lt;Button startIcon="local_grocery_store" /&gt; <br />
          <Button color="primary" startIcon='local_grocery_store' />
        </div>
        <div className='html-style'>
          &lt;Button endIcon="local_grocery_store" /&gt; <br />
          <Button color="primary" endIcon='local_grocery_store'/>
        </div>
      </div>
      <div className="grid-3-columns">
      <div className='html-style'>
          &lt;Button size="sm" /&gt; <br />
          <Button color="primary" size='sm' />
        </div>
        <div className='html-style'>
          &lt;Button size="md" /&gt; <br />
          <Button color="primary" size='md'/>
        </div>
        <div className='html-style'>
          &lt;Button size="lg" /&gt; <br />
          <Button color="primary" size='lg'/>
        </div>
      </div>
      <div className="grid-4-columns">
        <div className='html-style'>
          &lt;Button color="default"/&gt; <br />
          <Button color="default"/>
        </div>
        <div className='html-style'>
          &lt;Button color="primary" /&gt; <br />
          <Button color="primary"/>
        </div>
        <div className='html-style'>
          &lt;Button color="secondary" /&gt; <br />
          <Button color="secondary"/>
        </div>
        <div className='html-style'>
          &lt;Button color="danger"" /&gt; <br />
          <Button color="danger" />
        </div>
      </div>""
      <p className='css-effects-style text-center'>Icons https://google.github.io/material-design-icons/</p>
      <p className='css-effects-style text-center'>Created By JosMigue - devChallenges.io</p>
    </>
  )
}

export default App
