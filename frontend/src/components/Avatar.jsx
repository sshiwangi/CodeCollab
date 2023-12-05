import React, {useState} from 'react'

function Avatar() {
   const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
    <div className="avatar online">
</div>
<div className="avatar offline">
  <div className="w-12 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
{dropdownVisible && (
        <div className="dropdown">
          <ul>
            <li>View Profile</li>
            <li>Edit Profile</li>
            <li>Log Out</li>
          </ul>
        </div>
      )}
</>
  )
}

export default Avatar