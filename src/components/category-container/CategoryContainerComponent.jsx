import React, { Component } from 'react';
import CategoryItem from '../category-item/Category-item.component';
import './category-container.style.scss';



class CategoryContainerComponent extends Component {
    constructor() {
        super();
        this.state = {
            courseCategories: [

                // {
                //     title: 'java full stack',
                //     imageUrl: 'temp.jpg',
                //     id: 1,
                //     linkUrl: 'course-category/javafullstack'
                // },

                // {
                //     title: 'java Script full stack',
                //     imageUrl: 'temp.jpg',
                //     id: 2,
                //     linkUrl: 'course-category/jsfullstack'
                // },

                // {
                //     title: 'Python full stack',
                //     imageUrl: 'temp.jpg',
                //     id: 3,
                //     linkUrl: 'course-category/pythonfullstack'
                // },

                // {
                //     title: 'Programming Bootcamp',
                //     imageUrl: 'temp.jpg',
                //     id: 4,
                //     linkUrl: 'course-category/bootcamp'
                // },

                // {
                //     title: 'Data Science',
                //     imageUrl: 'temp.jpg',
                //     id: 5,
                //     linkUrl: 'course-category/dsci'
                // },

            ]

        }
    }

    componentDidMount(){
        fetch('https://myfelight.firebaseapp.com/course-category.json')
          .then(response=>response.json())
          .then(items =>this.setState({courseCategories: items}));      
        }

    render() {
        return (
            <div className='categories-container'>
                {
                    this.state.courseCategories.map(({id,title,imageUrl}) => (
                        <CategoryItem key={id}
                            title={title}
                            imageUrl={imageUrl}
                             />
                    ))
                }
            </div>
        )
    }
}

export default CategoryContainerComponent;