import React from 'react';

const StudioTeam = () => {
  const leadership = [
    {
      id: 1,
      name: 'Jeff Akseizer',
      image: '/headshots/jeff-a.png',
      role: 'Founding Principal',
      order: 1,
    },
    {
      id: 2,
      name: 'Gozde Tanyeri',
      image: '/headshots/gozde.png',
      role: 'Principal, ADG+G',
      extra: 'AIA, NCARB',
      order: 2,
    },
    {
      id: 3,
      name: 'Mike Snyder',
      image: '/headshots/mike-s.png',
      role: 'CFO, partner',
      order: 3,
    },
    {
      id: 4,
      name: 'Sarah Kate Snyder',
      image: '/headshots/sk.png',
      role: 'creative director',
      order: 4,
    },
  ];

  const team = [
    {
      id: 1,
      name: 'Brady',
      image: '/headshots/brady.png',
      role: 'SR. ACCOUNTANT',
    },
    {
      id: 2,
      name: 'Emma',
      image: '/headshots/emma.png',
      role: 'TITLE',
    },
    {
      id: 3,
      name: 'Ginger',
      image: '/headshots/ginger.png',
      role: 'PROJECT MANAGER & PRODUCTION DIRECTOR',
      extra: 'NCARB',
    },
    {
      id: 4,
      name: 'Howard',
      image: '/headshots/howard.png',
      role: 'PROJECT ARCHITECT',
    },
    {
      id: 5,
      name: 'Husna',
      image: '/headshots/husna.png',
      role: 'PROJECT STAFF ARCHITECT',
    },
    {
      id: 6,
      name: 'Jared',
      image: '/headshots/jared.png',
      role: 'TITLE',
    },
    {
      id: 7,
      name: 'Jenny',
      image: '/headshots/jenny.png',
      role: 'TITLE',
    },
    {
      id: 8,
      name: 'Jose',
      image: '/headshots/jose.png',
      role: 'Title',
    },
    {
      id: 9,
      name: 'Josh',
      image: '/headshots/josh.png',
      role: 'MILLWORK MANAGER',
    },
    {
      id: 10,
      name: 'Lauren',
      image: '/headshots/lauren.png',
      role: 'TITLE',
    },
    {
      id: 11,
      name: 'Lina',
      image: '/headshots/lina.png',
      role: 'TITLE',
    },
    {
      id: 12,
      name: 'Lindsay',
      image: '/headshots/lindsay.png',
      role: 'DESIGN DIRECTOR',
    },
    {
      id: 13,
      name: 'Marie',
      image: '/headshots/marie.png',
      role: 'Procurement Manager',
    },
    {
      id: 14,
      name: 'Marlene',
      image: '/headshots/marlene.png',
      role: 'TITLE',
    },
    {
      id: 15,
      name: 'Olivia',
      image: '/headshots/olivia.png',
      role: 'Designer',
    },
    {
      id: 16,
      name: 'Paul',
      image: '/headshots/paul.png',
      role: 'PROJECT ARCHITECT',
    },
    {
      id: 17,
      name: 'Pedro',
      image: '/headshots/pedro.png',
      role: 'architectural designer',
    },
    {
      id: 18,
      name: 'Phu',
      image: '/headshots/phu.png',
      role: 'Sr. Architectural Designer & Project Manager',
    },
    {
      id: 19,
      name: 'Rosa',
      image: '/headshots/rosa.png',
      role: 'Title',
    },
    {
      id: 20,
      name: 'Sonya',
      image: '/headshots/sonya.png',
      role: 'sR. DESIGNER',
    },
    {
      id: 21,
      name: 'Stephanie',
      image: '/headshots/steph.png',
      role: 'sR. DESIGNER',
    },
    {
      id: 22,
      name: 'Taylor',
      image: '/headshots/taylor.png',
      role: 'sR. ART DIRECTOR',
    },
    {
      id: 23,
      name: 'Vicky',
      image: '/headshots/vicky.png',
      role: 'Project designer',
    },
  ];

  return (
    <div className='w-full bg-brand-peach/50 pt-16 -mt-16'>
      <div className='w-full max-w-5xl mx-auto flex flex-col gap-6 pb-16'>
        <div className='text-brand-gray text-4xl font-brand font-light italic'>
          Our Team
        </div>
        <div className='grid grid-cols-4 gap-10'>
          {leadership.map((person) => (
            <div key={person.id} className='flex flex-col gap-5'>
              <div
                className='w-full h-full bg-cover bg-center aspect-[3.5/4]'
                style={{ backgroundImage: `url(${person.image})` }}
              ></div>
              <div className='flex flex-col gap-1'>
                <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                  {person.name}
                </div>
                <div className='text-brand-brown text-sm font-brand-book uppercase font-light'>
                  {person.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full bg-brand-dark-peach py-16 flex flex-col gap-6'>
        <div className='w-full max-w-5xl mx-auto grid grid-cols-4 gap-10'>
          {team.map((person) => (
            <div key={person.id} className='flex flex-col gap-5'>
              <div
                className='w-full h-full bg-cover bg-center aspect-[3.5/4]'
                style={{ backgroundImage: `url(${person.image})` }}
              ></div>
              <div className='flex flex-col gap-1'>
                <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                  {person.name}
                </div>
                <div className='text-brand-brown text-sm font-brand-book uppercase font-light'>
                  {person.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioTeam;
