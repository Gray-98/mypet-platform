import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const RemarkListItemText = styled(ListItemText)`
	& .MuiListItemText-primary {
    	font-size: 0.9rem;
  	}
`

const FoodItem = ({ id, name, remark, birthDate, endDate, count, isLastChild, handleDelete }) => {
    return <>
        <List sx={{ paddingBottom: '0' }}>
            {
                <>
                    <ListItem
                        sx={{ borderBottom: isLastChild && '0' }}
                        divider={!remark}
                        secondaryAction={
                            <IconButton onClick={handleDelete(id, count)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={name}
                            secondary={`${birthDate} ~ ${endDate}`}
                        />
                        <ListItemText
                            primary={`剩余：${count}`}
                            sx={{ textAlign: 'center', maxWidth: '85px', minWidth: '85px' }}
                        />
                    </ListItem>
                    {remark &&
                        <ListItem divider sx={{ paddingTop: '0', marginTop: '-16px' }}>
                            <RemarkListItemText primary={`备注：${remark}`} />
                        </ListItem>}
                </>
            }
        </List>
    </>
}

export default FoodItem