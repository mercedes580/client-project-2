import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as IMAGE_PATHS from "../../consts/image-paths";
import Loader from '../../components/Loader/Loader';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import CommentsCard from '../../components/CommentsCard/CommentsCard';
import NewCommentCard from '../../components/NewCommentCard/NewCommentCard';
import DeleteToast from '../../components/DeleteToast/DeleteToast';
import ModalEditProductForm from '../../components/ModalEditProductForm/ModalEditProductForm';
import axios from 'axios';
import './BakeryDetails.css'

const notify = () => toast.success('¡Producto editado!')

const API_URL = 'http://localhost:5005'

const BakeryDetails = () => {
    const { id } = useParams()
    const [bakery, setBakery] = useState(null)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [newRating, setNewRating] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const handleShowToast = () => setShowToast(true)
    const handleCloseToast = () => setShowToast(false)
    const [editingCommentId, setEditingCommentId] = useState(null)
    const [editedComments, setEditedComments] = useState({})

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetchBakery()
        fetchBakeryComments()
    }, [])

    const fetchBakery = () => {
        axios
            .get(`${API_URL}/products/${id}`)
            .then(response => {
                setTimeout(() => {
                    setBakery(response.data)
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    const fetchBakeryComments = () => {
        axios
            .get(`${API_URL}/comments?productId=${id}`)
            .then((response) => {
                setComments(response.data)
            })
            .catch(err => console.log(err))
    }

    const handleDelete = () => {
        axios
            .delete(`${API_URL}/products/${id}`)
            .then(() => {
                navigate('/productos')
            })
            .catch(err => console.log(err))
    }

    const handleBack = () => {
        navigate('/productos')
    }

    const handleAddComment = e => {

        e.preventDefault()

        const commentData = {
            productId: id,
            rating: newRating,
            comment: newComment,
            date: new Date().toISOString()
        }

        axios
            .post(`${API_URL}/comments`, commentData)
            .then(() => {
                alert("Comentario registrado con éxito")
                fetchBakeryComments()
                setNewComment('')
                setNewRating(0)
            })
            .catch(err => console.log(err))
    }

    const handleDeleteComment = (commentId) => {
        axios
            .delete(`${API_URL}/comments/${commentId}`)
            .then(() => {
                alert("Comentario eliminado con éxito")
                fetchBakeryComments()
            })
            .catch(err => console.log(err))
    }

    const handleEditComment = (commentId) => {
        setEditingCommentId(commentId)
        const commentToEdit = comments.find(comment => comment.id === commentId)
        setEditedComments({
            ...editedComments,
            [commentId]: {
                rating: commentToEdit?.rating || 0,
                comment: commentToEdit?.comment || '',
            }
        })
    }

    const handleSaveComment = (commentId) => {
        const updatedComment = {
            productId: id,
            rating: editedComments[commentId]?.rating,
            comment: editedComments[commentId]?.comment,
            date: new Date().toISOString()
        }

        axios
            .put(`${API_URL}/comments/${commentId}`, updatedComment)
            .then(() => {
                alert("Comentario actualizado con éxito")
                fetchBakeryComments()
                setEditingCommentId(null)
            })
            .catch(err => console.log(err))
    }

    if (!bakery) {
        return <Loader />
    }

    return (
        <div className="BakeryDetails">

            <Toaster />

            <img className="sticker" src={IMAGE_PATHS.STICKER} alt="Sticker" />

            <DetailsCard
                bakery={bakery}
                handleBack={handleBack}
                handleShow={handleShow}
                handleShowToast={handleShowToast} />

            <CommentsCard
                comments={comments}
                editingCommentId={editingCommentId}
                editedComments={editedComments}
                handleEditComment={handleEditComment}
                handleSaveComment={handleSaveComment}
                handleDeleteComment={handleDeleteComment}
                setEditingCommentId={setEditingCommentId}
                setEditedComments={setEditedComments} />

            <NewCommentCard
                newRating={newRating}
                newComment={newComment}
                setNewRating={setNewRating}
                setNewComment={setNewComment}
                handleAddComment={handleAddComment} />

            <DeleteToast
                showToast={showToast}
                handleCloseToast={handleCloseToast}
                handleDelete={handleDelete} />

            <ModalEditProductForm showModal={showModal}
                handleClose={handleClose}
                fetchBakery={fetchBakery}
                notify={notify} />

        </div>
    )
}

export default BakeryDetails