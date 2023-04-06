import "./App.scss";

function App() {
  return (
    <div className="card">
      <div className="card-back">
        <div className="line-numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
        </div>
        <code>
          <span className="variable">const </span><span className="function">aboutMe </span><span className="operator">= </span><span>&#123;</span>
          <div className="indent"> <span className="property">name</span><span className="operator">: </span><span className="string">'Enes KAPUCU'</span><span>,</span></div>
          <div className="indent"> <span className="property">title</span><span className="operator">: </span><span className="string">'Sr. Software Engineer'</span><span>,</span></div>
          <div className="indent"> <span className="property">contact</span><span className="operator">: </span><span>&#123;</span>
            <div className="indent"> <span className="property">email</span><span className="operator">: </span><span className="string">'<a className="string" href="mailto:enes.kapucu@outlook.com.tr">enes.kapucu@outlook.com.tr</a>'</span><span>,</span></div>
            <div className="indent"><span className="property">phone</span><span className="operator">: </span><span className="string">'<a className="string" href="tel:+905399449818">+90 539 944 9818</a>'</span></div><span>&#125;</span><span>,</span>
            <div><span className="property">links</span><span className="operator">: </span><span>&#123;</span></div>
            <div className="indent"><span className="property">portfolio</span><span className="operator">: </span><span className="string">'<a className="string" href="https://eneskpc.github.io/">eneskpc.github.io</a>'</span><span>,</span></div>
            <div className="indent"><span className="property">linkedIn</span><span className="operator">: </span><span className="string">'<a className="string" href="https://www.linkedin.com/in/eneskpc/">linkedin.com/in/eneskpc</a>'</span><span>,</span></div>
            <div className="indent"><span className="property">codePen</span><span className="operator">: </span><span className="string">'<a className="string" href="https://codepen.io/eneskpc">codepen.io/eneskpc</a>'</span><span>,</span></div>
            <div className="indent"><span className="property">codeSandbox</span><span className="operator">: </span><span className="string">'<a className="string" href="https://codesandbox.io/u/eneskpc">codesandbox.io/u/eneskpc</a>'</span><span>,</span></div>
            <div className="indent"><span className="property">hackerRank</span><span className="operator">: </span><span className="string">'<a className="string" href="https://www.hackerrank.com/eneskpc">hackerrank.com/eneskpc</a>'</span><span>,</span></div>
            <div>&#125;</div>
          </div><span>&#125;</span></code>
      </div>
      <div className="card-front">
        <div className="line-numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
        </div><code><span className="variable">this</span><span>.</span><span className="method">addEventListener</span><span>(</span><span className="string">'mouseover'</span><span>, </span><span className="function">() =&#62; </span><span>&#123; </span>
          <div className="indent"><span className="variable">this</span><span>.</span><span className="property">flipCard </span><span>= </span><span className="boolean">true</span><span>;</span></div><span>&#125;);</span></code>
      </div>
    </div>
  );
}

export default App;
