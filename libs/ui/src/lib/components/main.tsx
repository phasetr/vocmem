import {Box, Button, IconButton, Link as MuiLink, List, ListItem, Modal, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {useRouter} from "next/router";
import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState} from "react";
import CloseIcon from "@mui/icons-material/Close";

export function Main(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const router = useRouter();
  return (
    <Box component="section"
         sx={{padding: "0 20px", minHeight: "calc(100vh-30px)", height: "100%"}}>
      <Box component="main" sx={{marginBottom: "60px"}}>{props.children}</Box>
      <Box component="footer"
           sx={{
             width: "80%",
             padding: "10px",
             borderTop: '0.5px ridge',
             margin: "0 auto",
             display: "flex",
             flexDirection: "row",
             justifyContent: 'space-between',
             backgroundColor: "white",
             position: "fixed",
             bottom: "0",
           }}>
        <Button onClick={() => router.push("/")}><HomeIcon/></Button>

        <Button onClick={() => setInquiryModalOpen(true)}><AlternateEmailIcon/></Button>
        <Modal
          open={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
          aria-labelledby="inquiry-modal-modal-title"
          aria-describedby="inquiry-modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Box sx={{
              height: 0,
              textAlign: "right",
            }}>
              <IconButton onClick={() => setModalOpen(false)}>
                <CloseIcon/>
              </IconButton>
            </Box>
            <Typography id="inquiry-modal-modal-title" variant="h6" component="h2">お問い合わせ</Typography>
            <Typography id="inquiry-modal-modal-description" sx={{mt: 2}}>
              <Box component="section">
                <Box component="p">機能追加のご要望やお問い合わせは<MuiLink href="https://phasetr.com/contact" target="_blank"
                                                                    rel="noopener noreferrer">こちら</MuiLink>からお受けします。</Box>
                <Box component="p">数学・物理・プログラミング・語学に関する学習相談もお受けします。メルマガ登録は<MuiLink
                  href="https://phasetr.com/archive/fc/course/mm/" target="_blank"
                  rel="noopener noreferrer">こちら</MuiLink>からどうぞ。</Box>
                <Box component="p">その他コンテンツは<MuiLink href="https://phasetr.com/archive/" target="_blank"
                                                      rel="noopener noreferrer">アーカイブサイト</MuiLink>をご覧ください。</Box>
              </Box>
            </Typography>
          </Box>
        </Modal>

        <Button onClick={() => setModalOpen(true)}><DescriptionIcon/></Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Box sx={{
              height: 0,
              textAlign: "right",
            }}><IconButton onClick={() => setModalOpen(false)}><CloseIcon/></IconButton></Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">マニュアル</Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
              <Box component="section">
                <List>
                  <ListItem>メインアイコンは左から「前の単語」「次の単語」「単語の保存」「前のブロック」「次のブロック」です。</ListItem>
                  <ListItem>現状アプリ設定は保存されないので必要に応じて都度設定してください。</ListItem>
                  <ListItem>ボタンを2回クリックしないと正しく動かないことがあります。</ListItem>
                  <ListItem>単語保存はLocalStorageを使っているため大量の単語は保存しきれない可能性があります。随時整理してください。</ListItem>
                  <ListItem>大量の単語を保存すると動作が重くなる可能性があります。</ListItem>
                  <ListItem>Wiktionaryのリンクをクリックして出てくるページに音声が再生できるリンクがあ（る場合があ）ります。</ListItem>
                </List>
              </Box>
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}

export default Main;
