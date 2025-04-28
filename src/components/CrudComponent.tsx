import React, { useState, useEffect } from 'react';

// Item interfeysi
interface Item {
  id: number;
  title: string;
  description: string;
}

// Props interfeysi
interface CrudComponentProps {
  title?: string;
}

const CrudComponent: React.FC<CrudComponentProps> = ({ title = "Ma'lumotlar boshqaruvi" }) => {
  // State boshqaruvi
  const [items, setItems] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState<Item>({ id: 0, title: '', description: '' });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Ma'lumotlarni local storage dan yuklash
  useEffect(() => {
    const storedItems = localStorage.getItem('crudItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Ma'lumotlarni local storage ga saqlash
  useEffect(() => {
    localStorage.setItem('crudItems', JSON.stringify(items));
  }, [items]);

  // Form ma'lumotlarini o'zgartirish
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  // Yangi ma'lumot qo'shish yoki mavjudini tahrirlash
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentItem.title.trim() === '') {
      alert("Sarlavha kiritilishi shart!");
      return;
    }

    if (isEditing) {
      // Tahrirlash
      setItems(items.map(item => 
        item.id === currentItem.id ? currentItem : item
      ));
      setIsEditing(false);
    } else {
      // Yangi qo'shish
      const newItem = {
        ...currentItem,
        id: Date.now()
      };
      setItems([...items, newItem]);
    }

    // Formani tozalash
    setCurrentItem({ id: 0, title: '', description: '' });
  };

  // Ma'lumotni tahrirlash uchun tanlash
  const handleEdit = (item: Item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  // Ma'lumotni o'chirish
  const handleDelete = (id: number) => {
    if (window.confirm("Siz rostdan ham bu ma'lumotni o'chirmoqchimisiz?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      
      {/* Ma'lumot qo'shish/tahrirlash formasi */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Sarlavha:</label>
          <input 
            type="text"
            name="title"
            value={currentItem.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sarlavhani kiriting"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tavsif:</label>
          <textarea 
            name="description"
            value={currentItem.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tavsifni kiriting"
            rows={3}
          />
        </div>
        
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {isEditing ? "Yangilash" : "Qo'shish"}
        </button>
        
        {isEditing && (
          <button 
            type="button"
            onClick={() => {
              setCurrentItem({ id: 0, title: '', description: '' });
              setIsEditing(false);
            }}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Bekor qilish
          </button>
        )}
      </form>
      
      {/* Ma'lumotlar ro'yxati */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Ma'lumotlar ro'yxati</h3>
        
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Ma'lumotlar mavjud emas</p>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="border border-gray-200 p-4 rounded-md hover:bg-gray-50">
                <h4 className="text-lg font-medium">{item.title}</h4>
                <p className="text-gray-600 mt-1">{item.description}</p>
                
                <div className="mt-3 flex space-x-2">
                  <button 
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    Tahrirlash
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    O'chirish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudComponent;