import React, { useState } from 'react'
import styled from 'styled-components'
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Bio } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`

const ContactCard = styled.div`
  width: 95%;
  max-width: 560px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.primary + '55'};
  box-shadow: 0px 4px 32px ${({ theme }) => theme.primary + '22'};
  border-radius: 20px;
  padding: 40px 36px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  @media (max-width: 600px) {
    padding: 28px 20px;
  }
`

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 0.18) 0%, hsla(294, 100%, 50%, 0.18) 100%);
  border: 1.5px solid ${({ theme }) => theme.primary + '55'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
`

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`

const CardSubtitle = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-top: -16px;
  line-height: 1.6;
`

const EmailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.text_secondary + '44'};
  border-radius: 12px;
  padding: 14px 20px;
  width: 100%;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary + '88'};
  }
`

const EmailText = styled.span`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  word-break: break-all;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`

const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + '18'};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const PrimaryButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  color: #ffffff;
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.primary + '55'};
  }
`

const SecondaryButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  &:hover {
    background: ${({ theme }) => theme.primary + '18'};
    transform: translateY(-2px);
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.text_secondary + '22'};
`

const CopiedToast = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease;
  height: 18px;
`

const EMAIL = 'jaganathsegi104@gmail.com'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactCard>
          <IconCircle>
            <EmailIcon fontSize="inherit" />
          </IconCircle>

          <CardTitle>Get In Touch</CardTitle>
          <CardSubtitle>
            Drop me an email and I'll get back to you as soon as possible.
          </CardSubtitle>

          <EmailRow>
            <EmailText>{EMAIL}</EmailText>
            <CopyButton onClick={handleCopy} title="Copy email">
              {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
            </CopyButton>
          </EmailRow>

          <CopiedToast show={copied}>
            <CheckIcon style={{ fontSize: 14 }} /> Copied to clipboard!
          </CopiedToast>

          <Divider />

          <ButtonGroup>
            <PrimaryButton href={`mailto:${EMAIL}`}>
              <EmailIcon style={{ fontSize: 18 }} />
              Send Email
            </PrimaryButton>
            <SecondaryButton href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 18 }} />
              LinkedIn
            </SecondaryButton>
          </ButtonGroup>
        </ContactCard>
      </Wrapper>
    </Container>
  )
}

export default Contact
