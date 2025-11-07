import { StyleSheet } from 'react-native';

// --- Nossa Nova Paleta de Cores ---
const corPrincipal = '#006D77'; // Um tom de verde-azulado (teal) escuro
const corFundo = '#f4f4f8';      // Um cinza bem claro para o fundo
const corTexto = '#333';
const corTextoClaro = '#555';

// ----------------------------------

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: corFundo, // APLICADO
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: corFundo, // APLICADO
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 30,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3, // Aumentei um pouco a borda
    borderColor: corPrincipal, // APLICADO
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: corTexto,
  },
  titulo: {
    fontSize: 18,
    color: corTextoClaro,
    marginBottom: 20,
  },

  // --- 🎨 ATUALIZAÇÃO DO BOTÃO ---
  // Este estilo agora é o botão customizado
  botaoContainer: {
    flexDirection: 'row', // Para alinhar ícone e texto
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: corPrincipal, // APLICADO
    paddingVertical: 12,    // Espaçamento interno
    width: '90%',
    borderRadius: 25,         // Arredondado
    marginBottom: 15,

    // Sombra (opcional, mas legal)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // --- 🎨 NOVO ESTILO ---
  // Estilo para o TEXTO dentro do botão
  botaoPrincipalTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Espaço entre o ícone e o texto
  },
  // ------------------------------

  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // <-- Mude aqui
    width: '80%', // <-- Mude aqui
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: corPrincipal, // APLICADO
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 5,
  },
  cardText: {
    fontSize: 14,
    color: corTextoClaro,
    lineHeight: 20,
    marginTop: 5,
  },
  // Removido o estilo duplicado de botaoPrincipalTexto
});