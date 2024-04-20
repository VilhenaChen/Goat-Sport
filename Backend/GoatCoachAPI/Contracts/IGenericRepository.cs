namespace GoatCoachAPI.Contracts
{
	public interface IGenericRepository<T> where T : class
	{
		Task<List<T>> GetAllAsync();
		Task<T?> GetByIdAsync(int? id);
		Task<T> CreateAsync(T entity);
		Task UpdateAsync(T entity);
		Task DeleteAsync(int id);
		Task<bool> Exists(int id);
	}
}
