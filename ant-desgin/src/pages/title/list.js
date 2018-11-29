import React from 'react'
import Link from 'umi/link'

const lessons = [
    {title: 'Lesson 1: title', description: 'Lesson 1: description'},
    {title: 'Lesson 2: title', description: 'Lesson 2: description'},
    {title: 'Lesson 3: title', description: 'Lesson 3: description'},
    {title: 'Lesson 4: title', description: 'Lesson 4: description'}
]

class Lesson extends React.PureComponent {
    titleClick(e) {
        console.log(this.props.index + '-' + this.props.lesson.title)
    }

    render() {
        const {lesson} = this.props
        return (
            <div>
                <h1 onClick={this.titleClick.bind(this)}>{lesson.title}</h1>
                <p>{lesson.description}</p>
                <br/>
            </div>
        )
    }
}

class LessonsList extends React.PureComponent {
    render() {
        return (
            <div>
                {lessons.map(
                    (lesson, i) => <Lesson key={i} index={i} lesson={lesson}/>
                )}
                <Link to='/users/list'>go back</Link>
            </div>
        )
    }
}

export default LessonsList;