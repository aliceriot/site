import React from 'react'
import R from 'ramda'

const projectWebsite = data => {
  return data.project_url
    ? <a href={data.project_url} target='_blank'>Learn more</a>
    : null
}

const sourceLink = data => {
  return data.source_code
    ? <a href={data.source_code} target='_blank'>Code</a>
    : null
}

const project = (projectData, idx) => (
  <div className='project' key={idx}>
    <h3 className='title'>
      { projectData.title }
    </h3>
    <div className='description'>
      { projectData.description }
    </div>
    <div className='links'>
      { projectWebsite(projectData) }
      { sourceLink(projectData) }
    </div>
  </div>
)

const projectData = [
  {
    title: 'Boston Displacement Mapping Project',
    description: 'A map highlighting stories of displacement in Boston. Implemented with React + Redux + Leaflet.js.',
    project_url: 'http://www.bostondisplacement.org/maps/tenant-stories/',
    source_code: 'https://github.com/AntiEvictionBoston/Maps',
    technologies: ['JS', 'es6', 'webpack', 'react']
  },
  {
    title: 'Matasano Exercises',
    description: "Solutions to some of the Matasano cryptography problems (I'll finish it eventually!)",
    project_url: '/projects/matasano',
    technologies: ['golang', 'cryptography']
  },
  {
    title: 'fp.js',
    description: 'A tiny functional programming library in JavaScript which I implemented mostly on a plane.',
    source_code: 'https://github.com/aliceriot/fp.js',
    technologies: ['JS', 'es6', 'fp']
  },
  {
    title: 'Lucy Parsons Center Schedule',
    description: 'A Rails app I wrote for a non-profit bookstore, allowing volunteers to coordinate shifts and training on a schedule.',
    technologies: ['react', 'rails', 'heroku'],
    source_code: 'https://github.com/LucyParsonsCenter/shifts'
  },
  {
    title: 'Data Structures in C',
    description: 'Implementations of some basic data structures, for learning and expository purposes.',
    technologies: ['C', 'algorithms'],
    source_code: 'https://github.com/aliceriot/datastructures'
  },
  {
    title: 'Pocket Guide to Email Encryption',
    description: 'A short guide I wrote explaining how to use GPG for email encryption, using Thunderbird and Enigmail.',
    source_code: 'https://github.com/aliceriot/PocketGuide',
    technologies: ['svg', 'pdf']
  }
]

const projects = () => (
  <div className='projects single-column'>
    { R.addIndex(R.map)(project, projectData) }
  </div>
)

const Projects = ({ children }) => (
  R.isNil(children) ? projects() : children
)

export default Projects
