interface FormData {
    name: string,
    phone: string,
    email: string,
    appeal?: string
}

export const sendApplicationToTelegram = (formData: FormData) => {
    const botToken = '7658188907:AAEBRfnMdPSXVc1kcjIhF35R6yez67Os_kE'// Токен бота
    const chatId = '-1002289409901' // ID канала
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage` // URL для отправки сообщения

    // Формируем сообщение в формате HTML
    const message = `
    ✅ Новая заявка:
    <b>Имя:</b> ${formData.name}
    <b>Телефон:</b> ${formData.phone}
    <b>Email:</b> ${formData.email}
    <b>Описание:</b> ${formData.appeal}`

    // Параметры, которые будем отправлять
    const params = {
        chat_id: chatId, // ID чата
        text: message, // Текст сообщения
        parse_mode: 'HTML' // Режим парсинга HTML
    }

    // Отправляем данные с помощью fetch API
    return fetch(apiUrl, {
        method: 'POST', // Метод отправки
        headers: {
            'Content-Type': 'application/json', // Указываем тип содержимого
        },
        body: JSON.stringify(params) // Преобразуем параметры в JSON
    }).then(response => response.json()) // Возвращаем ответ в формате JSON
}