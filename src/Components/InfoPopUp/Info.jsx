import React from "react"
import { Modal, Box, Typography } from "@mui/material"
import Favorite from "./FavoriteButton"

export default function Info({ open, handleClose, anime, onAddToFavorites }) {
  if (!anime) return null

  const handleAddToFavorites = () => {
    onAddToFavorites(anime)
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "rgba(52, 51, 56, 0.5)",
          backdropFilter: "blur(20px)",
          border: "1px solid #000",
          boxShadow: 24,
          p: 4,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ color: "white" }}>
          {anime.attributes.canonicalTitle}
        </Typography>
        <Typography sx={{ mt: 2, color: "white" }}>
          {anime.attributes.synopsis}
        </Typography>
        <Favorite onClick={handleAddToFavorites} />
      </Box>
    </Modal>
  )
}
