const {useState, useEffect, useRef} = React;

const urls = [
  "https://placeimg.com/100/100/any&rnd=" + Math.random(),
  "https://placeimg.com/100/100/any&rnd=" + Math.random(),
  "https://placeimg.com/100/100/any&rnd=" + Math.random()
];

function Test() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      setLoading(false);
    }
  }
  return <React.Fragment>
    <div style={{display: loading ? "block" : "none"}}>
       Loading images,
    </div>
    <div style={{display: loading ? "none" : "block"}}>
      {urls.map(url => 
        <img 
          key={url}
          src={url}
          onLoad={imageLoaded}/>)}
    </div>
  </React.Fragment>;
}