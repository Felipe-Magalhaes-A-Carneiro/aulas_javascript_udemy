import javax.swing.JOptionPane;
public class aula_02 {
    public static void main (String args[]) {
        // declarar uma variável inteira
        int valor;
        // atribuir um valor inteiro
        valor = 3456;
        //declarar uma variável com casas decimais
        double x;
        // atribuir um valor double
        x= 34.233445;
        // declarar e atribuir um char
        char opcao = 'a';
        boolean ePresente = false; //armazena valores lógicos
        // trabalhando com Strings
        String nome = "Felipe Magalhães";

    JOptionPane.showMessageDialog(null, "Minha variavel inteira: " + valor);
    JOptionPane.showMessageDialog(null, "Minha double: " + x);
    JOptionPane.showMessageDialog(null, "Meu nome: " + nome + " e minha opção é " + opcao , "Exemplo" , JOptionPane.INFORMATION_MESSAGE);
    }
}