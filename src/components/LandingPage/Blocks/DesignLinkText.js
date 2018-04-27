import React from 'react'
import './DesignLinkText.css';
import Camera from '../../../images/polaroid leak.png'

class DesignLink extends React.Component {
  render () {
    return (
      <div id="DesignLinkText" className="LandingPageBlock" onClick={(e) => this.props.changeDisplay(e)}>
        <svg viewBox="112.62745 229.78431 115.19376 29.218751">
          <g transform="translate(-67.924802,-20.975602)">
            <g transform="matrix(1.2774207,0,0,1.2485561,-33.249642,22.22054)">
              <g transform="scale(0.98863747,1.0114931)">
                <path
                   d="m 260.50685,203.78993 -1.76305,0 -10.62468,-19.177 0,19.177 -1.77851,0 0,-22.51751 1.77851,0 10.64014,19.20793 0,-19.20793 1.74759,0 0,22.51751 z m -19.30976,-2.61364 q -1.12897,1.45374 -2.84562,2.19608 -1.71665,0.72687 -3.75808,0.72687 -3.46423,0 -5.44379,-2.3198 -1.97956,-2.3198 -2.05689,-6.43358 l 0,-5.47472 q 0,-4.31483 1.87131,-6.60369 1.88677,-2.30434 5.36646,-2.30434 3.10853,0 4.87158,1.71665 1.76305,1.71666 1.97956,4.94891 l -1.76304,0 q -0.27838,-2.59818 -1.53107,-3.78901 -1.23723,-1.20629 -3.54156,-1.20629 -2.75283,0 -4.12924,1.84037 -1.36095,1.82491 -1.36095,5.36647 l 0,5.19635 q 0,3.52609 1.50014,5.47472 1.5156,1.94863 4.23749,1.94863 2.95388,0 4.82519,-1.8713 l 0,-5.86136 -4.93344,0 0,-1.65479 6.71195,0 0,8.10383 z m -19.41802,2.61364 -1.76304,0 0,-22.51751 1.76304,0 0,22.51751 z m -7.95821,-5.53658 q 0,-1.88677 -1.08257,-2.96935 -1.06711,-1.08257 -4.00552,-2.07235 -2.93841,-0.98978 -4.31482,-2.21154 -1.80945,-1.59293 -1.80945,-4.20657 0,-2.58271 1.77852,-4.20657 1.77851,-1.62386 4.5932,-1.62386 2.87655,0 4.70146,1.88677 1.8249,1.88677 1.8249,4.85611 l -1.77851,0 q 0,-2.2734 -1.28362,-3.66528 -1.26816,-1.40734 -3.46423,-1.40734 -2.13422,0 -3.37144,1.1599 -1.22176,1.14443 -1.22176,2.96934 0,1.70119 1.1599,2.78376 1.15989,1.08257 3.69621,1.93316 2.53631,0.83513 3.8354,1.74759 1.29909,0.89698 1.9177,2.11874 0.61861,1.22177 0.61861,2.87656 0,2.64457 -1.79398,4.26842 -1.77851,1.6084 -4.71692,1.6084 -1.97956,0 -3.61889,-0.8042 -1.62385,-0.81966 -2.55177,-2.33526 -0.91246,-1.53107 -0.91246,-3.60342 l 1.76305,0 q 0,2.38166 1.43827,3.74261 1.43828,1.36094 3.8818,1.36094 2.13421,0 3.41784,-1.14443 1.29908,-1.14443 1.29908,-3.06213 z m -15.90738,-5.24275 -8.73791,0 0,9.14001 10.05246,0 0,1.63932 -11.81551,0 0,-22.51751 11.73818,0 0,1.67025 -9.97513,0 0,8.42861 8.73791,0 0,1.63932 z m -28.61988,10.77933 0,-22.51751 5.3046,0 q 3.66528,0 5.7995,2.35073 2.13421,2.33526 2.19608,6.44904 l 0,4.71692 q 0,4.2375 -2.16515,6.61916 -2.14968,2.38166 -6.04694,2.38166 l -5.08809,0 z m 1.76304,-20.84726 0,19.20794 3.41784,0 q 3.01574,0 4.67053,-1.85584 1.65479,-1.87131 1.70118,-5.33554 l 0,-4.71692 q 0,-3.46423 -1.62386,-5.38194 -1.60839,-1.9177 -4.67052,-1.9177 l -3.49517,0 z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default DesignLink;