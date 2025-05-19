export function getData<T>(fileName: string): Promise<T> {
  return fetch(`api/${fileName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при загрузке файла');
      }
      return response.json();
    });
}
