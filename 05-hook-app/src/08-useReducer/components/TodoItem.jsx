
export const TodoItem = ({id, description, done, remove, check}) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
                <span 
                  className={`${ (done) ? 'text-decoration-line-through'  : ''}`}
                  onDoubleClick={ ()=>{ check( id ) } }
                >
                  {description}
                  </span>
                <button 
                  className="btn btn-danger"
                  onClick={()=>{ remove(id) }}>Borrar</button>
        </li>
    </>
  )
}
