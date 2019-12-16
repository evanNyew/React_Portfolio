import React, { Component } from 'react'
import Client from './Contentful'

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state={
        projects:[],
        featuredProjects:[],
        loading:true 
    };

    getData = async() =>{
        try{
            let response = await Client.getEntries({
                content_type:"portfolio"
            });
            let projects = this.formatData(response.items)
            let featuredProjects = projects.filter(project => project.featured === true);
        
            this.setState({
                projects,
                featuredProjects,
                loading: false
            })
        } catch (error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getData();
    }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image =>image.fields.file.url);
            let project = {...item.fields, images, id}

            return project;
        });
        return tempItems;
    }

    getProject = (slug) =>{
        let tempProjects = [...this.state.projects];
        const project = tempProjects.find(project => project.slug === slug)
        return project;
    }
    render() {
        return (
            <ProjectContext.Provider value={{ ...this.state, getProject: this.getProject }}>
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export function withProjectConsumer(Component){
    return function ConsumerWrapper(props){
        return <ProjectConsumer>
            {value => <Component {...props} context ={value}/>}
        </ProjectConsumer>
    } 
}

export{ProjectProvider,ProjectConsumer,ProjectContext};