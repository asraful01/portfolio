import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Asraful Babul</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            


            
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                      <Skills
                      skill="Java"
                      progress={60}
                      />
                      <Skills
                      skill="Python"
                      progress={30}
                      />
                      <Skills
                      skill="Rails"
                      progress={50}
                      />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;