//Comments Page for users who are signed in
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MoodIcon from '@material-ui/icons/Mood'
import MoodBadIcon from '@material-ui/icons/MoodBad'
import Person from '@material-ui/icons/Person'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import {Link} from 'react-router-dom'
import {list} from './api-user.js'
import auth from './../auth/auth-helper'
import {read, update} from './api-user.js'
import { CardContent, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  textField:{
    
  }
}))

export default function Comments({}) {
    const id = auth.isAuthenticated().user._id
    const [comments, setComments] = useState({
        comment:'',
        postedComments: [],
        collectionOfComments: []
    })
  const classes = useStyles()
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const jwt = auth.isAuthenticated()
   

  
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    
   
    
    list(signal).then((data) => {
        if (data && data.error) {
          console.log(data.error)
        } else {
          setUsers(data)
        }
      })
      read({
        userId: id
      }, {t: jwt.token}, signal).then((data) => {
        if (data && data.error) {
            
        } else {
            setUser(data)
            setComments({...comments, collectionOfComments: data.collectionOfComments})
        }
      })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
  const clickSubmit = () => {
    const user = {
        comment: comments.comment || undefined,
        postedComments: comments.postedComments|| undefined,
        collectionOfComments: comments.collectionOfComments|| undefined
    }
    update({
     userId:id
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data && data.error) {
        setComments({...comments, error: data.error})
      } else {
        console.log('this here is fucked')
        setComments({...comments, comment: data.comment})
        setComments({...comments, postedComments: data.postedComments})
        setComments({...comments, collectionOfComments: data.collectionOfComments})
      }

    })
  }
  const updatePostedComments = () => {
    let test = comments.postedComments
    test.push(comments.comment)
    setComments({...comments, postedComments: test})

  }
  const commentCollection = () =>{
    let collect = comments.collectionOfComments
    collect.push(comments.postedComments)
    setComments({...comments, collectionOfComments: collect})
  }
  
  const handleChange = postedComments => event => {
    setComments({...comments, [postedComments]: event.target.value})
  }
  //not worrking
  const deleteComment = () =>{
    let array = comments.collectionOfComments
    let index = array.indexOf(comments.postedComments)
    if (index !== -1){
      array.splice(index,1)
      setComments({...comments,collectionOfComments:array})
    }  
    console.log('delete')  
  }


    return (
    <div className={classes.root}>  
      <Paper >
        <Typography variant="h6" className={classes.title}>
          User
        </Typography>
        <List dense>
         <Link to={"/comments"} >
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <Person/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={user.name}/>
                      <ListItemSecondaryAction>
                      
                      </ListItemSecondaryAction>
                    </ListItem>
                    
                    <TextField
                    id='comment-box'
                    label="Comment"
                    className={classes.textField}
                    value={comments.comment}
                    onChange={handleChange('comment')}
                    margin="normal"
                    >
                        
                    </TextField><CardActions>
          <Button color="primary" variant="contained" onClick={() => {updatePostedComments();commentCollection();clickSubmit()}} className={classes.submit}>Comment</Button>
        </CardActions>
                 </Link>
               
             
        </List>
        
      </Paper>
      <Paper elevation={4}>
      <Typography variant="h6" className={classes.title}>
          Users Comments
        </Typography>
        <List dense>
        {users.map((item, i) => {
          return <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Person/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name}/>
                      
                      <CardContent>
                      <TextField
                       InputProps={{
                        readOnly: true,
                      }}
                      type='text'
                      value={comments.collectionOfComments}
                      
                      
                      ></TextField>
                      
                      <IconButton>
                     <MoodIcon/>
                      </IconButton>
                      <IconButton
                      onClick={deleteComment}>
                          <MoodBadIcon/>
                      </IconButton>
                      </CardContent>
                      <ListItemSecondaryAction>
                      </ListItemSecondaryAction>
                    </ListItem>
                     })
                      }
                    <ListItem>

                    </ListItem>
                    </List> 
        </Paper>
      
      </div>)
    
}
