export function FormatDate(date: string) {
  const currentDate = new Date();
  const updatedAt = new Date(date);
  const diff = currentDate.getTime() - updatedAt.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
  }

  if (months > 0) {
    return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
  }

  if (days > 0) {
    return `há ${days} ${days === 1 ? 'dia' : 'dias'}`;
  }

  if (hours > 0) {
    return `há ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  }

  if (minutes > 0) {
    return `há ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
  }

  return 'agora';
}
