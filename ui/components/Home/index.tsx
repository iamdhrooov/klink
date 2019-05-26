import * as React from 'react';
import styles from './styles';
import { IMG_STATIC_PREFIX_URL, STATIC_URL_PREFIX } from '../../utils/constants';

class Home extends React.Component {

    render() {
      return (
        <div className={styles.app}>
          <div style={{textAlign:'center'}}>
            <img src={`${IMG_STATIC_PREFIX_URL}dhruv.png`} alt="image"  height="200px" width="200px"/>
        		<h1>Hi.</h1>
        		<h2>I'm <span style={{color: '#1AADE3'}}>Dhruv Srivastav.</span></h2>
        		<h2>I make Web.</h2>
        		<h2>Find me here.</h2>
          </div>
          <div className={styles.links}>
        		<li className={styles.li}>
        			<a href="https://github.com/dhruv2204"><img src={`${IMG_STATIC_PREFIX_URL}github.png`} height="60px" width="60px" /></a>
        		</li>
        		<li className={styles.li}>
        			<a href="https://www.facebook.com/dhruv2204"><img src={`${IMG_STATIC_PREFIX_URL}facebook.png`} height="60px" width="60px" /></a>
        		</li>
        		<li className={styles.li}>
        			<a href="https://twitter.com/dhruv2204"><img src={`${IMG_STATIC_PREFIX_URL}twitter.png`} height="60px" width="60px" /></a>
        		</li>
        		<li className={styles.li}>
        			<a href="https://in.linkedin.com/in/dhruv2204"><img src={`${IMG_STATIC_PREFIX_URL}linkedin.png`} height="60px" width="60px" /></a>
        		</li>    
          </div>	
					<div className={styles.resume}>
						<a href={`${STATIC_URL_PREFIX}docs/resume_Dhruv_Srivastav.pdf`}>
          	  Resume
						</a>
					</div>
        </div>
      )
    }
}

export default Home;