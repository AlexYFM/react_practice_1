import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Button from '../components/Button'
import Container from '../components/container/Container'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'


const Post = () => {
	const [post, setPost] = useState("")
	const {slug} = useParams() // called this because called this way in main.jsx too
	const navigate = useNavigate()
	const userData = useSelector((state) => state.auth.userData)
	const isAuthor = post && userData ? post.userId === userData.$id : false

	const deletePost = () => {
		appwriteService.deletePost(post.$id).then((status) => {
			if(status){
				appwriteService.deleteFile(post.featuredImage)
				navigate('/')
			}
		})
	}

	useEffect(() => {
		if (slug) {
			appwriteService.getPost(slug).then((post) => {
				if(post) {
					setPost(post)
				} else{
					navigate('/')
				}
			})
		}
	}, [slug, navigate])
	
	return post ? (
		<div className='py-8'>
			<Container>
				<div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
					<img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} />
					{isAuthor && (
						<div className="absolute right-6 top-6">
							<Link to={`/edit-post/${post.$id}`}>
								<Button bgColor='bg-green-500' className='mr-3'>
									Edit
								</Button>
							</Link>
							<Button bgColor='bg-red-500' onClick={deletePost}>

							</Button>
						</div>
					)}
				</div>
				<div className="w-full mb-6">
					<h1 className="text-2xl font-bold">{post.title}</h1>
					<div className='browser-css'>{parse(post.content)}</div>
				</div>
			</Container>
		</div>
	) : null // since we already have a useEffect to take care of null cases, we can just return a null here
}

export default Post