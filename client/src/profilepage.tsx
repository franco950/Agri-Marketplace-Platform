import { getProfile,changeProfile,deleteProfile } from "./api/profile"
import  { useState,useEffect } from 'react';
import { useQuery,useQueryClient } from "@tanstack/react-query";
import { Anyuser } from "./data";
import { useAuth } from "./context/useauth";

type Props = {
  User: Anyuser;
  onEdit: (field: keyof Anyuser) => void;
  onDelete: () => void;
};
// Your data type
const dummyUser = {
  id: '123',
  firstname: 'John',
  lastname: 'Doe',
  email: 'john@example.com',
  password: 'secret',
  phone: '123-456-7890',
};
const UserProfile: React.FC<Props> = ({ User, onEdit, onDelete }) => {
  return (
    <div className="max-w-md mx-auto p-4 shadow-xl rounded-2xl bg-white space-y-4">
      <h2 className="text-2xl font-semibold text-center">User Profile</h2>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span><strong>First Name:</strong> {User.firstname}</span>
          <button onClick={() => onEdit('firstname')} className="text-blue-600 text-sm">Edit</button>
        </div>

        <div className="flex justify-between items-center">
          <span><strong>Last Name:</strong> {User.lastname}</span>
          <button onClick={() => onEdit('lastname')} className="text-blue-600 text-sm">Edit</button>
        </div>

        <div className="flex justify-between items-center">
          <span><strong>Email:</strong> {User.email}</span>
          <button onClick={() => onEdit('email')} className="text-blue-600 text-sm">Edit</button>
        </div>

        <div className="flex justify-between items-center">
          <span><strong>Phone:</strong> {User.phone}</span>
          <button onClick={() => onEdit('phone')} className="text-blue-600 text-sm">Edit</button>
        </div>
       
      </div>
      <div className="pt-4">
        <button
          onClick={onDelete}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};


function ProfilePage(){
    const [user, setUser] = useState<Anyuser>(dummyUser);
    const [editingField, setEditingField] = useState<keyof Anyuser | null>(null);
    const [tempValue, setTempValue] = useState('');
    const { logout } = useAuth();
    const queryClient = useQueryClient();


    const {
      data: fetchedUser,
      isLoading,
      error,
    } = useQuery({
      queryKey: ['myuser'],
      queryFn: () => getProfile(),
      staleTime: 1000 * 60 * 5,
    });
    
    useEffect(() => {
        if (fetchedUser) {
            setUser(fetchedUser);
        }
        }, [fetchedUser]);
  
    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>{error.message}</p>;
    if (!user) return <p>No user to display</p>;



const handleEdit = (field: keyof Anyuser) => {
  setEditingField(field);
  setTempValue(user[field]);
};

const handleSave = async () => {
  if (!editingField) return;
  const updatedFields: Partial<Anyuser> = {
    [editingField]: tempValue,
  };

  try {
    console.log('almost awaiting')
    const response=await changeProfile(updatedFields); 
    setUser(prev => ({ ...prev, ...updatedFields }));
    setEditingField(null);
    queryClient.invalidateQueries({ queryKey: ['myuser'] });
    alert(`success: ${response}`)
    
  } catch (error) {
    if (error instanceof Error) {
      alert(`Failed to update: ${error.message}`);
    }
  }
};

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete your account?');
    if (!confirmed) return;
    try {
        const status = await Promise.all([
          deleteProfile(),
          logout()
        ]);
        
        console.log('Profile deleted successfully, status:', status);
        
        
    } catch (error:any) {
        alert(`Delete failed: ${error.message}`);
    }
  };

    return(<>
    <div className="p-4">
      {editingField ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Editing {editingField}</h3>
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditingField(null)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <UserProfile
          User={user}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div></>)
}
export default ProfilePage



