import { Box, Button, styled } from "@mui/material";
import React from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  bordeRadius: 2,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const ActionItem = ({ item }: any) => {
  return (
    <LeftContainer>
      <Box
        fontStyle={{
          padding: "15px20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={item?.images[0]} alt="image1" />
        {/* <Image
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUPEBAVFRUPFQ8PDxUVFQ8PDxUVFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFSsdFR0tLSsrLS0tLSsrLSstKystKystKy0tLS0tLSstKy0rLSstLSstKy0tLS0tKysrLS0tLf/AABEIASAArwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EADkQAAICAQIDBAcGBgIDAAAAAAABAhEDEiEEMUEFE1FhcYGRobHR8AYUIjLB4TNCUmKSogdDFiNy/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAbEQEBAQEBAQEBAAAAAAAAAAAAEQESAiFBMf/aAAwDAQACEQMRAD8A+HgBJ2ZQBNABAEgBDYEgBAEgBAEgBAEkAAAAAAAAAAAAAAEhQwFKigokAIoEvrckK6gRQUSAEEDACloBgIIIGIAgBqIAgCaCgIIJoAIAkAHoKGomjTNLQUNQUEpaIoegoFLRFD0RQWooihqCgUtBQ1BQKWgoagoFJQDUFCBQGZFEioIGoKEChRIAXBQ9BRuOVLQUNQUIUlBQ9EUCloKGolhaSgoagoFLRFD0FEKSgoagBSUFD0FBaSiKHoKBSUFD0RQKSgoeiKItaKCh6CjpHGkoKHoKESljHyIoegoRaroKLKChCq6Ch6ChCkoiiygaEKroiiygokWq6Ch6ChCkoih6ChFpKIoegokKSgGoKEWtSQKJYok6TrHCqqCi3SGkRKq0hRc4EaRCqqIou0kaRCqqDSW6SKJFqvSQ0XaRdIhVdB6h9IaRFquiKLKChCq6IosoKJFquiKLKIoRaSiKLKIokK3KBOgvUCdB1jko0BoNGgNAgz6A0Gnuw7sQZdBGg1d2R3YiM2kjQaXjI0CChwFcTVKAmgQZ3EjSaHAhwJFZ9JGk0aBXACjSRpL9BDiRap0kUXOJGkFU0Gkt0kaRFrrqA3dmlYxljNss3dB3ZrWMlYwMfdh3Zs7sO6KMfdivGbXiIeMDH3ZEcZreMmGMDDOAjgbHAV4wMjgRoNTgK4EGbQK4GpwFcAM2gVwNTgK4EgzaCNBocCNAgzaSNJpcBdBIO+oDrGXRgWxxGmozrGMsRrjhLY8OKvOsHch3R0lw/kN928hTlyniKONi44pzgrlGM5Jb80m625nZlw55b7T9oTx5FhhJxWlOdbNt9L5rb4k31kOSfZ3icmeEpZN9MqjKqva2vV+p1o4qi36jy3AdoyxTSTqLktUdtNdX5Oup7bJiqK822PG/D1n1zHjEcDZLGVuBplkcBXA1OIrgEZnAXQaXAjQRWVwIcDS4CuIGfQQ4ovcRXEDO4i6TQ4kOJB6HFE144WY8MjdgZiujRiwGqHDEcPFs6eDE/AlVjjwo/wB1Ovix/wBppx8P/aidLy81k4U8B9qeEbycRka/h5eEwY3y/wCmeSfxR9knw1/yo+X/APLHZc8CeTUu64nNiyKPWOSGB42/Wkv2rfO+lzHleyeAWXL3c3SyRlFNV+GX5ovz3jXTmeu4HhcmOLjly947/C600qW1X6faeH7M4TJi4zhk+eV8Nlj/APGRp/Cz6ZOBrzp6yOdOJRKJuyRM89jdY+MriLoLpZRVmRekmK+7Ydw/A6/Y7g53kVxXPd36tuZ2uI47h8WKaSi3NaUtP4o8n+auW3xJ0c48TKIjRoz5VdopeRF6TkukVxLFJA5IU5UuIriWykVuQpy6eNteHtLIcRJeHt/YRY0v5geJf1GGnT4XtRx/lT9f7HUw/aFJfw/9v2PORxL+obu11mNyrm7j1WP7Tpc8f+37GmH2ugueP/b9jw/E58eJJ5M2lSainu936Cp8dgTr7zD/ACjXxM84vWvef+X47/hP/L9jxv8Ayp27DieDx4443FrNGVt3/wBeRVy8yMOTHLeOeD9Eov8AU5f2r4SUoYa/EpZYcvxbU99ulDfOLnrant/NjXG8DKEKWGEcL5W1j5Pl/czpcRx7e6Vet/I5P2gxVxXDyUotQ7xzaakorbnXr9g/FdpYIuu9Um96heR+4ufE37mNb7Q+rfyM+TjG/p/I5eftiC5Qm/Tpj8zJk7Y6Rx8/GTfwRbiR1smdv6YnfPx+Jx59qStJxSXXeXLyN8/S/aXJrO/Ha7O7TUH+JvbrFtP4Bx/Hd43LX7dTb9xw014sHJeL9pYnTTPiNufxKlxFdfj8jHJrx97EcvN+1iHTorjV9X8hvv0fD4/I5Tl9WLf1bIV1ZcfGuXvfyKHxa+r+Rz2/q2K39WwV6iMn1HU39MojlQ+vyDTS8+mLlLklbPOcX9o56/8A1xjpX9Sbb9+x0O08Mp42lKltddTy0+FldGfVa8z9X8f2nPO4uelaLSUbS33b3fo9hSs8bbktVp9XFX47FPEYpQ2fpKrOe665ma6Ef7cfm9re3mzpYnPSoO+ulOcVtve1+nkjgY8zT+rNUJu075e36+ZrNY9eY6PE01vTTr8u0FTv8W27+ZVkzxW8YpKnF0lu3s/bRVPK2ncnvvvu7RTiV36N/r0FZGbLfuE7z3UEY3v4WLOk6MtRObK5c/D6/U7HZ2XViS6x/D6unuOLKUaStN308D0HZyisSUd+dvlbNeP6z7+YmvrcRxNLrxKpeT/Q6uLNLGI8ZfISyCl4yHEusLAzaSGjQyKAu4biTS+IficbHM0RzkrbrLiLVGTStRlXEvon69g1zb6L0vf3CpEdo4VJ3Ryp8FPpCTXode06rl4tiT4h9L2M+szW/PrfLjTi1tJNdd00Niy0dOOeVN1surW1+HIZP8sp4k03Wytvyb6GOXTu/wBxz1mV+T5+KK1kadx2O5HsyGRtrFkikucacb36O/I5eTh5QtSg9qt0635bjc0zc/GdSdVez5kdyy1IulToQ31GVYzvdkqsb9Jy4wOnwjqJvxk1z9+q1tiSb8ityEb8zo5JYtiykI5EFjkRZXqDUA7kRqF1EWBXDEi+GPwK1kSJ+9UqTftZh0aVhVb0VycV4mZ52+bIWTz6XvsKLsuXqk0jHkk+f7Fs+IVcl5+JlyZL/l/UzutZgjkpl8ON2qvy+ncyuvn0GVVXpJWtzHTXajpaZOK2Uop2vSvf6BuH4pSuDr8dxb6tPan08PYctR2Jr6/Qt1Jh1DoPGJCGTNYxp4xNMZ0jIpDazTOtDmI5lWsjUKkWaiNQmoixVizURqEsLBFlkWJZGoUil5BXlMveEORx6ejhplloWWUoslErXOLYvr09g01S8mUJja9q9YpD11T9RIsJVb9RZGS9/uKzp4S3T9oz50Uxe9Fmven0KzuLHLZPryZGsnLJKL3V+HXp7tzOplqc1fqJ1FKkGotTlbqJ1FWoNQpFmolSKrJsUizUFldhYqRZqCyuwsVYwgAHJ6AhkxQAZsiyAAsi9hsT6lVjp7e8JuLJun6P1Ijlp/XvK5ysQtTPK3JO2QmJYWSrFqkTZUmTZakW2Goqsmy1It1BZVqJ1CkW6gsr1BqLUiywsrsLFIpAAMOgAAAAAAAAAAAAAAAAALAAJsLIACbJsUAGsLFAB7CxCbFIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
          alt="image1"
        /> */}
      </Box>

      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <Cart />
        ADD TO CART
      </StyledButton>

      <StyledButton variant="contained" style={{ background: "#fb541d" }}>
        <Flash />
        BUY NOW
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
