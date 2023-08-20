import { styled } from '@nextui-org/react';
//file นี้คือไฟล์ปุ่ม Badge ที่ custom ไว้เรียกใช้ จะมี Role 6 อัน + Admin,Staff

export const StyledBadge = styled('span', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '$2 $3',
  margin: '0 2px',
  fontSize: '10px',
  fontWeight: '$bold',
  borderRadius: '14px',
  letterSpacing: '0.6px',
  lineHeight: 1,
  boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
  alignItems: 'center',
  alignSelf: 'center',
  color: '$white',
  variants: {
    type: {
      student: {
        bg: '$successLight',
        color: '$successLightContrast'
      },
      echange_student: {
        bg: '$errorLight',
        color: '$errorLightContrast'
      },
      alumni: {
        bg: '$warningLight',
        color: '$warningLightContrast'
      },
      templecturer: {
        bg: '$primaryLight',
        color: '$primaryLightContrast'
      },
      personel: {
        bg: '$secondaryLight',
        color: '$secondaryLightContrast'
      },
      retirement: {
        bg: '$neutralLight',
        color: '$neutralLightContrast'
      },
      Admin: {
        bg: '$warningLight',
        color: '$warningLightContrast'
      },
      Staff: {
        bg: '$successLight',
        color: '$successLightContrast' 
      }
    }
  },
//  defaultVariants: {
//    type: 'active'
//  }
});