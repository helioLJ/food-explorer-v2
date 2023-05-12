import moment from 'moment';
import { Container } from "./styles";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function OrderRowMobile({ id, status, date, details, updateOrders }) {
  const { user } = useAuth()
  const isAdmin = user.isAdmin

  async function handleUpdateStatus(e) {
    const newStatus = e.target.value;
    await api.put(`/orders/${id}`, { status: newStatus })
    updateOrders()
  }

  return (
    <Container isAdmin={isAdmin} status={status}>
      <div className="header">
        <p>{String(id).padStart(6, '0')}</p>
        {
          !isAdmin ? <p><div className="circle"></div>{status}</p> : ""
        }
        <p>{moment(date).format('DD/MM [às] HH[h]mm')}</p>
      </div>
      <p>{details}</p>
      {
        isAdmin ? (
          <div className="select-container">
            <select
              onChange={handleUpdateStatus}
              value={status}
            >
              <option value="Pendente">Pendente</option>
              <option value="Preparando">Preparando</option>
              <option value="Entregue">Entregue</option>
            </select>
            <div className="circle"></div>
          </div>
        ) : ""
      }
    </Container>
  )
}