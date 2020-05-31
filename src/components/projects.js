import React,{Component} from 'react';
import {Tabs, Tab,Grid,Cell,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                
               <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://signatureiow.marketing/wp-content/uploads/2018/05/Oli-Blog-2.jpg) center / cover'}}>
                    Alpha Blog</CardTitle>
                    <CardText>
                        This is a blog app. User can create accounts and add their stories.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/asraful01/Alpha-Blog" target="_blank">GitHub</Button>
                        <Button colored href="http://asraful-alpha-blog.herokuapp.com/"target="_blank">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>

                </Card>
                <Card className="item" shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff',height:'176px',background:'url(https://classifieds.usatoday.com/wp-content/uploads/2018/10/what-to-look-for-when-investing-in-stocks-768x512.jpeg) center / cover'}}>
                Stock Traker</CardTitle>
                <CardText>
                    Users can use this app to track their stocks with friends.
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/asraful01/finance-tracker" target="_blank"colored >GitHub</Button>
                    <Button href="https://stockstracking.herokuapp.com/"target="_blank"colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>

            </Card>
            
            <Card className="item"shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:'url(https://img-a.udemycdn.com/course/750x422/1122628_d72e.jpg) center / cover'}}>
            Message Me</CardTitle>
            <CardText>
                A simple chating app.
            </CardText>
            <CardActions border>
                <Button href="https://github.com/asraful01/message_me"target='_blank'colored>GitHub</Button>
                <Button href="https://a-message-me-b.herokuapp.com/login"target='_blank'colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
                </CardMenu>

        </Card>
        <Card className="item"shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:'url(https://img-a.udemycdn.com/course/750x422/1122628_d72e.jpg) center / cover'}}>
            Message Me</CardTitle>
            <CardText>
                A simple chating app.
            </CardText>
            <CardActions border>
                <Button href="https://github.com/asraful01/message_me"target='_blank'colored>GitHub</Button>
                <Button href="https://a-message-me-b.herokuapp.com/login"target='_blank'colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
                </CardMenu>

        </Card>
               </div>
            )
        } 
            else if(this.state.activeTab===1){
                return (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn.auth0.com/blog/illustrations/reactjs.png) center / cover'}}>
                    React Project #1</CardTitle>
                    <CardText>
                        lorem  asdasdsa
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>

                </Card>
                )
            }
    }

    render(){
        return (
            <div className="category-tabs">
                <Tabs  activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    
                    <Tab>Ruby On Rails</Tab>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>

                
                        <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    
             
            </div>
        );
    }
}
export default Projects;