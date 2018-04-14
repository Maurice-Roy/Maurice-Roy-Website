import React from 'react'
import './AboutLink.css';

class AboutLink extends React.Component {
  render () {
    return (
      <div id="AboutLink" className="LandingPageBlock" onClick={(e) => this.props.changeDisplay(e)}>
        <svg viewBox="112.62745 229.78431 108.79564 29.218754">
          <g transform="translate(-68.445402,-20.557488)">
            <g transform="matrix(1.2774207,0,0,1.2485561,-33.249642,22.22054)">
              <g transform="scale(0.98863747,1.0114931)">
                <path
                  d="m 255.85288,182.6116 -6.40265,0 0,20.84726 -1.77851,0 0,-20.84726 -6.38718,0 0,-1.67025 14.56834,0 0,1.67025 z m -17.91788,-1.67025 0,15.97568 q -0.0155,3.26318 -1.76305,5.05716 -1.73211,1.79398 -4.93344,1.79398 -3.24771,0 -4.97983,-1.76305 -1.71665,-1.77851 -1.71665,-5.14995 l 0,-15.91382 1.76305,0 0,15.85196 q 0,5.33553 4.93343,5.33553 4.85612,0 4.91798,-5.18088 l 0,-16.00661 1.77851,0 z m -17.85602,13.70228 q 0,4.36122 -1.9177,6.74288 -1.90223,2.38166 -5.351,2.38166 -3.41784,0 -5.36647,-2.38166 -1.93316,-2.38166 -1.94863,-6.69649 l 0,-4.9025 q 0,-4.34576 1.93317,-6.74289 1.93316,-2.41259 5.351,-2.41259 3.46423,0 5.38193,2.41259 1.9177,2.41259 1.9177,6.78928 l 0,4.80972 z m -1.77851,-4.88705 q 0,-3.69621 -1.42281,-5.55205 -1.42281,-1.85584 -4.09831,-1.85584 -2.58271,0 -4.03645,1.82491 -1.45374,1.80945 -1.48467,5.42833 l 0,5.0417 q 0,3.71168 1.4692,5.58298 1.46921,1.85584 4.08285,1.85584 2.69097,0 4.08285,-1.85584 1.40734,-1.85584 1.40734,-5.58298 l 0,-4.88705 z m -29.1921,13.70228 0,-22.51751 5.70671,0 q 3.04667,0 4.60866,1.50014 1.57747,1.48467 1.57747,4.39215 0,1.73211 -0.8042,3.01574 -0.8042,1.28362 -2.22701,1.85584 1.63933,0.41756 2.64457,1.9177 1.02071,1.48467 1.02071,3.49516 0,2.93841 -1.60839,4.6396 -1.60839,1.70118 -4.56227,1.70118 l -6.35625,0 z m 1.76305,-10.81026 0,9.17094 4.67053,0 q 2.01049,0 3.17039,-1.23723 1.1599,-1.23722 1.1599,-3.4333 0,-2.04142 -1.08258,-3.24772 -1.0671,-1.20629 -2.9848,-1.25269 l -4.93344,0 z m 0,-1.62386 4.09831,0 q 2.01049,0 3.124,-1.06711 1.1135,-1.0671 1.1135,-3.17039 0,-2.14968 -1.09804,-3.15492 -1.08257,-1.02072 -3.29411,-1.02072 l -3.94366,0 0,8.41314 z m -8.96346,6.13974 -8.44406,0 -1.9177,6.29438 -1.84038,0 7.17591,-22.51751 1.63933,0 7.17591,22.51751 -1.84037,0 -1.94864,-6.29438 z m -7.93371,-1.65479 7.42336,0 -3.71168,-12.07842 -3.71168,12.07842 z"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default AboutLink;