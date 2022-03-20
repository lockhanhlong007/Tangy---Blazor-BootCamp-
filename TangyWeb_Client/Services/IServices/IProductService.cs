using TangyWeb_Models;

namespace TangyWeb_Client.Services.IServices
{
    public interface IProductService
    {
        public Task<IEnumerable<ProductDTO>> GetAll();
        public Task<ProductDTO> Get(int productId);
    }
}