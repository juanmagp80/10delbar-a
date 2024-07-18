import java.time.LocalDate;

import javax.persistence.*;

@Entity
public class Noticia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titulo;
    private String descripcion;
    private LocalDate fecha;
    private String redactor;
    private String imagenUrl; // Esto puede ser una URL a una imagen

    // Getters y Setters
}