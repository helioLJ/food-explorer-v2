import dayjs from 'dayjs';
import { Container } from "./styles";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function OrderRow({ id, status, date, details, updateOrders }) {
  const { user } = useAuth()
  const isAdmin = user.isAdmin

  const formattedDate = dayjs(date).subtract(3, 'hour').format('YYYY-MM-DD HH:mm:ss');

  async function handleUpdateStatus(e) {
    const newStatus = e.target.value;
    await api.put(`/orders/${id}`, { status: newStatus })
    updateOrders()
  }

  return (
    <Container isadmin={isAdmin ? isAdmin : undefined} status={status}>
      <td>
        <div className="circle"></div>
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
              <div className="circle-admin"></div>
            </div>
          ) : (status)
        }
      </td>
      <td>{String(id).padStart(6, '0')}</td>
      <td>{details}</td>
      <td>{dayjs(formattedDate).format('DD/MM [às] HH[h]mm')}</td>
    </Container>
  )
}
