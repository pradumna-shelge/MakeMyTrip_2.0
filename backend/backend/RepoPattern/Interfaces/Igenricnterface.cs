using Microsoft.AspNetCore.Mvc;

namespace backend.RepoPattern.Interfaces
{
    public interface Igenricnterface<T>
    {
        Task<IEnumerable<T>> Get();
        
        Task Put( T ob);


        Task<T> Post(T ob);
        Task Delete(T ob);

    }
}
