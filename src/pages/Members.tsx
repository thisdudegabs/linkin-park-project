import React, { useState, useEffect, useRef } from "react";
import "../styles/members.css";
import members, { MembersInter } from "../assets/data/membersData";

const Members: React.FC = () => {
  const membersRef = useRef<HTMLDivElement | null>(null);
  const [selectedMember, setSelectedMember] = useState<MembersInter | null>(
    null
  );

  useEffect(() => {
    if (membersRef.current) {
      membersRef.current.classList.add("members-appear");
    }
  }, []);

  const handleClick = (member: MembersInter) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <div className="members" ref={membersRef}>
        {members.map((member) => (
          <div
            key={member.id}
            className="memberList"
            onClick={() => handleClick(member)}
          >
            <img src={member.image} alt={member.title} />
            <div className="members-title">{member.title}</div>
          </div>
        ))}
      </div>
      {selectedMember && (
        <div className="member-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={closeModal}>
              X
            </div>
            <div
              className="member-image"
              style={{ backgroundImage: `url(${selectedMember.image})` }}
            ></div>
            <div className="member-info">
              <h2>{selectedMember.title}</h2>
              <p>{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
