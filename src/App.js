import faker from '@faker-js/faker'
import React from 'react'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          content='Nice blog post'
          picture={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00AM'
          content='I like the subject'
          picture={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 5:00PM'
          content='I like the writing'
          picture={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

export default App
